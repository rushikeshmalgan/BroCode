import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";

import { Header } from "./components/header";
import { InputBar } from "./components/input-bar";

import { ToastProvider } from "./providers";
import { DialogProvider } from "./providers/dialog";
import { KeyboardLayerProvider } from "./providers/keyboard-layer";
import { ThemeProvider, useTheme } from "./providers/theme";

function ThemeRoot() {
    const { colors } = useTheme();

    return (
        <box
            width="100%"
            height="100%"
            backgroundColor={colors.background}
            justifyContent="center"
            alignItems="center"
        >
            <box
                width={80}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap={3}
            >
                <Header />

                <box width="100%">
                    <InputBar onSubmit={() => {}} />
                </box>
            </box>
        </box>
    );
}

function App() {
    return (
      <ThemeProvider>
        <KeyboardLayerProvider>
                <DialogProvider>
                    <ToastProvider>
                        <ThemeRoot />
                    </ToastProvider>
                </DialogProvider>
        </KeyboardLayerProvider>
        </ThemeProvider>
    );
}

const renderer = await createCliRenderer({
    targetFps: 60,
    exitOnCtrlC: false,
});

createRoot(renderer).render(<App />);