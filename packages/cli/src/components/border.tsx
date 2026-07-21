export const EmptyBorder = {
  topLeft: "╭",
  topRight: "╮",
  bottomLeft: "╰",
  bottomRight: "╯",
  horizontal: "─",
  vertical: "│",
  topT: "┬",
  bottomT: "┴",
  leftT: "├",
  rightT: "┤",
  cross: "┼",
};

export const SplitBorder = {
  border: ["left", "right"] as const,
  customBorderChars: {
    ...EmptyBorder,
    vertical: "┃", // Makes the center divider stand out
  },
};