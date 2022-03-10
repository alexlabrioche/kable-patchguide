import { Flex, Button, Box } from "@chakra-ui/react";
import { MouseEventHandler, useMemo, useState } from "react";
import useReadLocalStorage from "../hooks/useReadLocalStorage";
import { GameOptions } from "./PreGameSettings";
import RuleCard from "./RuleCard";
import Coinflip from "./Coinflip";
import { createShuffleDestructions } from "../utils/create-rulesets";
import Appbar from "./Appbar";

interface IProps {
  onNextPhase: MouseEventHandler;
}

export default function DestructionPhase({ onNextPhase }: IProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const gameOptions: GameOptions | null = useReadLocalStorage("game-options");
  const rules = useMemo(
    () => createShuffleDestructions(gameOptions).slice(0, 5),
    [gameOptions]
  );

  return (
    <Flex p={4} height="full" direction="column">
      <Appbar phase="destruction" />
      <Flex flex={1} direction="column" justify="center" align="center">
        <Flex gap={2} mb={2}>
          {rules.map((_, i) => (
            <Button
              colorScheme={activeIndex === i ? "pink" : undefined}
              onClick={() => setActiveIndex(i)}
            >
              {i + 1}
            </Button>
          ))}
        </Flex>
        <RuleCard rule={rules[activeIndex]} />
        <Box h={16} w="full">
          {rules[activeIndex].hasCoinflip && <Coinflip />}
        </Box>
      </Flex>
      <div>
        <Button width="full" colorScheme="green" onClick={onNextPhase}>
          Start over?
        </Button>
      </div>
    </Flex>
  );
}
