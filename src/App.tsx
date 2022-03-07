import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { useState } from "react";
import Appbar from "./components/Appbar";
import PreGameSettings from "./components/PreGameSettings";

import CreationPhase from "./components/CreationPhase";
import EvolutionPhase from "./components/EvolutionPhase";
import DestructionPhase from "./components/DestructionPhase";

const phases = ["pre-game", "creation", "evolution", "destruction"];

export const App = () => {
  const [phase, setPhase] = useState(phases[0]);
  const onNextPhase = () =>
    setPhase(phases[phases.findIndex((e) => e === phase) + 1]);
  const onReset = () => setPhase(phases[0]);

  return (
    <ChakraProvider theme={theme}>
      <Box height="100vh" width="100vw">
        <Appbar phase={phase} />
        <Box
          maxWidth="40rem"
          margin="auto"
          height={phase === phases[0] ? "90%" : "100%"}
        >
          {phase === phases[0] && <PreGameSettings onNextPhase={onNextPhase} />}
          {phase === phases[1] && <CreationPhase onNextPhase={onNextPhase} />}
          {phase === phases[2] && <EvolutionPhase onNextPhase={onNextPhase} />}
          {phase === phases[3] && <DestructionPhase onNextPhase={onReset} />}
        </Box>
      </Box>
    </ChakraProvider>
  );
};
