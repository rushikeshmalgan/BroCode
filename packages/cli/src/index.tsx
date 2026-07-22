import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";

import { Header } from "./components/header";
import { InputBar } from "./components/input-bar";

function App() {
  return (
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
  );
}

const renderer = await createCliRenderer({
    targetFps: 60,
    exitOnCtrlC: false,
});

createRoot(renderer).render(<App />);