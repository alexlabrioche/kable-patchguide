import { Flex, Button, Text } from "@chakra-ui/react";
import { MouseEventHandler, useMemo, useState } from "react";
import { getDestructions } from "../assets";
import useReadLocalStorage from "../hooks/useReadLocalStorage";
import { shuffleArray } from "../utils/random";
import { GameOptions } from "./PreGameSettings";
import { parseRule } from "../utils/rules-parser";
import RuleCard from "./RuleCard";

interface IProps {
  onNextPhase: MouseEventHandler;
}

export default function DestructionPhase({ onNextPhase }: IProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const gameOptions: GameOptions | null = useReadLocalStorage("game-options");
  const destructions = useMemo(
    () => getDestructions(gameOptions),
    [gameOptions]
  );
  const rules = useMemo(
    () =>
      shuffleArray(destructions)
        .slice(0, 5)
        .map((r) => parseRule(r, gameOptions)),
    [gameOptions, destructions]
  );
  return (
    <Flex p={4} height="full" direction="column">
      <Text fontWeight="bold" mb={8} textAlign="center">
        End your patch with these rules
      </Text>
      <Flex flex={1} direction="column" justify="center" align="center">
        <RuleCard rule={rules[activeIndex]} mb="4" />
        <Flex gap={2}>
          {rules.map((_, i) => (
            <Button
              colorScheme={activeIndex === i ? "pink" : undefined}
              onClick={() => setActiveIndex(i)}
            >
              {i + 1}
            </Button>
          ))}
        </Flex>
      </Flex>
      <div>
        <Button width="full" colorScheme="green" onClick={onNextPhase}>
          Start over?
        </Button>
      </div>
    </Flex>
  );
}
