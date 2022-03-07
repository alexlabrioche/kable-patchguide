import { Flex, Text, Button } from "@chakra-ui/react";
import { MouseEventHandler, useMemo } from "react";
import { getCreations } from "../assets";
import useReadLocalStorage from "../hooks/useReadLocalStorage";
import { shuffleArray } from "../utils/random";
import { parseRule } from "../utils/rules-parser";
import { GameOptions } from "./PreGameSettings";
import RuleCard from "./RuleCard";

interface IProps {
  onNextPhase: MouseEventHandler;
}

export default function CreationPhase({ onNextPhase }: IProps) {
  const gameOptions: GameOptions | null = useReadLocalStorage("game-options");
  const creations = useMemo(() => getCreations(gameOptions), [gameOptions]);
  const [r1, r2] = shuffleArray(creations);
  const rule1 = parseRule(r1, gameOptions);
  const rule2 = parseRule(r2, gameOptions);

  return (
    <Flex direction="column" height="full" p={4}>
      <Text fontWeight="bold" mb={8} textAlign="center">
        All thing must start somewhere
      </Text>
      <Flex
        flex={1}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <RuleCard rule={rule1} mb="4" />
        <RuleCard rule={rule2} />
      </Flex>
      <Button colorScheme="green" mt={16} w="full" onClick={onNextPhase}>
        Ready!
      </Button>
    </Flex>
  );
}
