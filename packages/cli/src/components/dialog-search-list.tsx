import { useCallback, useRef, useState, type ReactNode } from "react";
import { TextAttributes, type InputKeyBinding, type ScrollBoxRenderable } from "@opentui/core";
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
    
}