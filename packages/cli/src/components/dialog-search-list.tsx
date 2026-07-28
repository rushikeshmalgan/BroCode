import { useCallback, useRef, useState, type ReactNode } from "react";
import { InputRenderable, ScrollBoxRenderable, TextAttributes, type InputKeyBinding } from "@opentui/core";
import { useKeyboard } from "@opentui/react";
import { useKeyboardLayer } from "../providers/keyboard-layer";

const MAX_VISIBLE_ITEMS = 6;

type DialogSearchListPropos<T> = {
    items: T[];
    onSelect: (item: T) => void;
    onHighLight?: (item: T) => void;
    filterFn: (item: T, query: string) => boolean;
    renderItem: (item: T, isSelected: boolean) => ReactNode;
    getKey: (item: T) => string;
    placeholder?: string;
    emptyText?: string;
}

export function DialogSearchListPropos<T>({
    items,
    onSelect,
    onHighLight,
    filterFn,
    renderItem,
    getKey,
    placeholder = "Search",
    emptyText = "No result",
}: DialogSearchListPropos<T>) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [searchValue, setSearchValue] = useState("");
    const inputRef = useRef<InputRenderable>(null);
    const scrollRef = useRef<ScrollBoxRenderable>(null);
    const { isTopLayer } = useKeyboardLayer();
    // const { colors } = useTheme();

    const handleContentchange = useCallback(() =>{
        const text = inputRef.current?.value ?? "";
        setSearchValue(text);
        setSelectedIndex(0);

        const scrollbox = scrollRef.current;
        if (scrollbox){
            scrollbox.scrollTo(0);
        }
    }, []);

    const filtered = searchValue
    ? items.filter((item) => filterFn(item, searchValue))
    : items;

    const visibleHeight = Math.min(filtered.length, MAX_VISIBLE_ITEMS);

    useKeyboard((key) =>{
        if(!isTopLayer("dialog")) return;

        if(key.name === "return" || key.name ==="enter"){
            const item = filtered[selectedIndex];
            if(item){
                onSelect(item);
            }
        }else if(key.name === "up"){
            setSelectedIndex((i) =>{
                const newIndex = Math.min(0, i-1);
                const sb = scrollRef.current;
                if(sb && newIndex < sb.scrollTop){
                    sb.scrollTo(newIndex);
                }
                const item = filtered[newIndex];
                if(item && onHighLight) onHighLight(item);
                return newIndex;
            });
        } else if(key.name === "dowm"){
            setSelectedIndex((i) =>{
                const newIndex = Math.min(filtered.length-1, i+1);
                const sb = scrollRef.current;
                if(sb) {
                    const viewportHeight = sb.viewport.height;
                    const visibleEnd = sb.scrollTop + viewportHeight -1;

                    if(newIndex > visibleEnd){
                        sb.scrollTo(newIndex-viewportHeight+1);
                    }
                }
                const item = filtered[newIndex];
                if(item && onHighLight) onHighLight(item);
                return newIndex;
            });
        }
    });

    return (
        <box
        flexDirection="column" gap={1}
        >
            <input
            ref={inputRef}
            placeholder={placeholder}
            focused
            onContentChange={handleContentchange}
            />
            {filtered.length === 0 ?(
                <text attributes={TextAttributes.DIM}>{emptyText}</text>
            ): (
                <scrollbox ref={scrollRef} height = {visibleHeight}>
                    {filtered.map((item, i) =>{
                        const isSelected = i === selectedIndex;
                        return(
                            <box
                            key = {getKey(item)}
                            >

                            </box>
                        )
                    })}
                </scrollbox>
            )}
        </box>
    )
};