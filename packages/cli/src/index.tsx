import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { ToastProvider } from "./providers";
import { Header } from "./components/header";
import { InputBar } from "./components/input-bar";
import { KeyboardLayerProvider } from "./providers/keyboard-layer";
import { DialogProvider } from "./providers/dialog";

function App() {
  return (
    <KeyboardLayerProvider>
      <DialogProvider>
    <ToastProvider>
    <box
      width="100%"
      height="100%"
      backgroundColor="#0D0D12"
      justifyContent="center"
      alignItems="center"
    >
      <box
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={3}
        width={80}
      >
        <Header />

        <box
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <InputBar onSubmit={() => {}} />
        </box>
      </box>
    </box>
    </ToastProvider>
    </DialogProvider>
    </KeyboardLayerProvider>
  );
}

const renderer = await createCliRenderer({
    targetFps: 60,
    exitOnCtrlC: false,
});

createRoot(renderer).render(<App />);