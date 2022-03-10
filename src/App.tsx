import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import { useState } from "react";

import PreGameSettings from "./components/PreGameSettings";
import CreationPhase from "./components/CreationPhase";
import EvolutionPhase from "./components/EvolutionPhase";
import DestructionPhase from "./components/DestructionPhase";

import "./global.css";

const phases = ["pre-game", "creation", "evolution", "destruction"];

const theme = extendTheme({
  fonts: {
    heading: "Fira Code, monospace",
    body: "Fira Code, monospace",
  },
});

export const App = () => {
  const [phase, setPhase] = useState(phases[0]);
  const onNextPhase = () =>
    setPhase(phases[phases.findIndex((e) => e === phase) + 1]);
  const onReset = () => setPhase(phases[0]);

  return (
    <ChakraProvider theme={theme}>
      <Box height="100vh" width="100vw">
        <Box maxWidth="40rem" margin="auto" height="full">
          {phase === phases[0] && <PreGameSettings onNextPhase={onNextPhase} />}
          {phase === phases[1] && <CreationPhase onNextPhase={onNextPhase} />}
          {phase === phases[2] && <EvolutionPhase onNextPhase={onNextPhase} />}
          {phase === phases[3] && <DestructionPhase onNextPhase={onReset} />}
        </Box>
      </Box>
    </ChakraProvider>
  );
};
