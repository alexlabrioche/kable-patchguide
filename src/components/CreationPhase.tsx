import { Flex, Button } from "@chakra-ui/react";
import { MouseEventHandler, useMemo } from "react";
import useReadLocalStorage from "../hooks/useReadLocalStorage";
import { createShuffleCreations } from "../utils/create-rulesets";
import { parseRule } from "../utils/rules-parser";
import { GameOptions } from "./PreGameSettings";
import RuleCard from "./RuleCard";
import Appbar from "./Appbar";

interface IProps {
  onNextPhase: MouseEventHandler;
}

export default function CreationPhase({ onNextPhase }: IProps) {
  const gameOptions: GameOptions | null = useReadLocalStorage("game-options");
  const [r1, r2] = useMemo(
    () => createShuffleCreations(gameOptions),
    [gameOptions]
  );
  const rule1 = parseRule(r1, gameOptions);
  const rule2 = parseRule(r2, gameOptions);

  return (
    <Flex direction="column" height="full" p={4}>
      <Appbar phase="creation" />
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
