export type ThemeColors = {
    primary: string;
    planMode: string;
    selection: string;
    thinking: string;
    success: string;
    error: string;
    info: string;
    background: string;
    surface: string;
    dialogSurface: string;
    thinkingBorder: string;
    dimSeparator: string;
};

export type Theme = {
    name: string;
    colors: ThemeColors;
};

export const THEMES: Theme[] = [
    {
        name: "bro's Theme",
        colors: {
            primary: "#7C3AED",         // Violet
            planMode: "#A855F7",        // Purple
            selection: "#38BDF8",       // Sky Blue
            thinking: "#FBBF24",        // Amber
            success: "#4ADE80",         // Green
            error: "#FB7185",           // Rose
            info: "#22D3EE",            // Cyan
            background: "#0B1020",      // Deep Navy
            surface: "#161B2E",         // Dark Slate
            dialogSurface: "#1F2640",   // Elevated Surface
            thinkingBorder: "#F59E0B",  // Orange
            dimSeparator: "#2F3B5B",    // Muted Divider
        },
    },
    {
        name: "Dracula",
        colors: {
            primary: "#BD93F9",
            planMode: "#FF79C6",
            selection: "#44475A",
            thinking: "#F1FA8C",
            success: "#50FA7B",
            error: "#FF5555",
            info: "#8BE9FD",
            background: "#282A36",
            surface: "#343746",
            dialogSurface: "#44475A",
            thinkingBorder: "#F1FA8C",
            dimSeparator: "#6272A4",
        },
    },
    {
        name: "Nord",
        colors: {
            primary: "#88C0D0",
            planMode: "#B48EAD",
            selection: "#434C5E",
            thinking: "#EBCB8B",
            success: "#A3BE8C",
            error: "#BF616A",
            info: "#81A1C1",
            background: "#2E3440",
            surface: "#3B4252",
            dialogSurface: "#434C5E",
            thinkingBorder: "#EBCB8B",
            dimSeparator: "#4C566A",
        },
    },
    {
        name: "Gruvbox Dark",
        colors: {
            primary: "#D3869B",
            planMode: "#B16286",
            selection: "#504945",
            thinking: "#FABD2F",
            success: "#B8BB26",
            error: "#FB4934",
            info: "#83A598",
            background: "#282828",
            surface: "#3C3836",
            dialogSurface: "#504945",
            thinkingBorder: "#FABD2F",
            dimSeparator: "#665C54",
        },
    },
    {
        name: "Solarized Dark",
        colors: {
            primary: "#268BD2",
            planMode: "#6C71C4",
            selection: "#073642",
            thinking: "#B58900",
            success: "#859900",
            error: "#DC322F",
            info: "#2AA198",
            background: "#002B36",
            surface: "#073642",
            dialogSurface: "#094352",
            thinkingBorder: "#B58900",
            dimSeparator: "#586E75",
        },
    },
    {
        name: "Monokai",
        colors: {
            primary: "#AE81FF",
            planMode: "#F92672",
            selection: "#49483E",
            thinking: "#E6DB74",
            success: "#A6E22E",
            error: "#F92672",
            info: "#66D9EF",
            background: "#272822",
            surface: "#383830",
            dialogSurface: "#49483E",
            thinkingBorder: "#E6DB74",
            dimSeparator: "#75715E",
        },
    },
    {
        name: "One Dark",
        colors: {
            primary: "#C678DD",
            planMode: "#E06C75",
            selection: "#3E4451",
            thinking: "#E5C07B",
            success: "#98C379",
            error: "#E06C75",
            info: "#61AFEF",
            background: "#282C34",
            surface: "#2C313A",
            dialogSurface: "#3E4451",
            thinkingBorder: "#E5C07B",
            dimSeparator: "#5C6370",
        },
    },
    {
        name: "Tokyo Night",
        colors: {
            primary: "#BB9AF7",
            planMode: "#F7768E",
            selection: "#33467C",
            thinking: "#E0AF68",
            success: "#9ECE6A",
            error: "#F7768E",
            info: "#7DCFFF",
            background: "#1A1B26",
            surface: "#24283B",
            dialogSurface: "#2F3549",
            thinkingBorder: "#E0AF68",
            dimSeparator: "#414868",
        },
    },
    {
        name: "Catppuccin Mocha",
        colors: {
            primary: "#CBA6F7",
            planMode: "#F5C2E7",
            selection: "#45475A",
            thinking: "#F9E2AF",
            success: "#A6E3A1",
            error: "#F38BA8",
            info: "#89DCEB",
            background: "#1E1E2E",
            surface: "#313244",
            dialogSurface: "#45475A",
            thinkingBorder: "#F9E2AF",
            dimSeparator: "#585B70",
        },
    },
    {
        name: "Rosé Pine",
        colors: {
            primary: "#C4A7E7",
            planMode: "#EBBCBA",
            selection: "#403D52",
            thinking: "#F6C177",
            success: "#31748F",
            error: "#EB6F92",
            info: "#9CCFD8",
            background: "#191724",
            surface: "#1F1D2E",
            dialogSurface: "#26233A",
            thinkingBorder: "#F6C177",
            dimSeparator: "#403D52",
        },
    },
    {
        name: "Ayu Dark",
        colors: {
            primary: "#FFB454",
            planMode: "#F29E74",
            selection: "#273747",
            thinking: "#FFD173",
            success: "#C2D94C",
            error: "#F07178",
            info: "#59C2FF",
            background: "#0A0E14",
            surface: "#0D1017",
            dialogSurface: "#1F2430",
            thinkingBorder: "#FFD173",
            dimSeparator: "#3D4149",
        },
    },
    {
        name: "GitHub Dark",
        colors: {
            primary: "#58A6FF",
            planMode: "#BC8CFF",
            selection: "#264F78",
            thinking: "#D29922",
            success: "#3FB950",
            error: "#F85149",
            info: "#79C0FF",
            background: "#0D1117",
            surface: "#161B22",
            dialogSurface: "#21262D",
            thinkingBorder: "#D29922",
            dimSeparator: "#30363D",
        },
    },
];

export const DEFAULT_THEMES = THEMES.find((t) => t.name === "bro's Theme")!;