import {
  Text,
  IconButton,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Box,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import useCountdown from "../hooks/useCountdown";
import useReadLocalStorage from "../hooks/useReadLocalStorage";
import { GameOptions } from "./PreGameSettings";
import { MdStop, MdSkipNext } from "react-icons/md";
import RuleCard from "./RuleCard";
import Coinflip from "./Coinflip";
import {
  createShuffleDestructions,
  createShuffleEvolutions,
} from "../utils/create-rulesets";
import Appbar from "./Appbar";
import { shuffleArray } from "../utils/random";

interface IProps {
  onNextPhase: any;
}

const parseSeconds = (secs: number) => (secs < 10 ? `0${secs}` : secs);

const createRules = (gameOptions: GameOptions | null) => {
  const evolutions = createShuffleEvolutions(gameOptions).slice(0, 7);
  const destructions = createShuffleDestructions(gameOptions).slice(0, 3);
  return shuffleArray([...evolutions, ...destructions]);
};

export default function EvolutionPhase({ onNextPhase }: IProps) {
  const gameOptions: GameOptions | null = useReadLocalStorage("game-options");
  const rules = useMemo(() => createRules(gameOptions), [gameOptions]);

  const [now, setNow] = useState(new Date().getTime());
  const [index, setIndex] = useState(0);
  const rule = rules[index];
  const intervalMs = gameOptions ? gameOptions.timer * 60 * 1000 : 60000;
  const { minutes, seconds, countdown } = useCountdown(now + intervalMs);

  const setNewRule = () => {
    if (index === rules.length - 1) {
      onNextPhase();
      return;
    }
    setNow(new Date().getTime());
    setIndex(index + 1);
  };

  return (
    <Flex p={4} height="full" direction="column">
      <Appbar phase="evolution" />
      <Flex flex={1} direction="column" justify="center" align="center">
        <Text fontWeight="bold" mb={2} fontSize="sm">
          {index + 1}/{rules.length}
        </Text>
        <RuleCard rule={rule} />
        <Box h={16} w="full">
          {rule.hasCoinflip && <Coinflip />}
        </Box>
      </Flex>
      <Flex width="full" gap={4} justify="center">
        <IconButton
          aria-label="next"
          colorScheme="green"
          size="md"
          icon={<MdSkipNext />}
          onClick={setNewRule}
        />
        <Flex flex={1} align="center">
          <Slider
            aria-label="timer"
            min={0}
            max={intervalMs}
            defaultValue={0}
            value={intervalMs - countdown}
            cursor="default"
            colorScheme="green"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
          </Slider>
          {minutes >= 0 && seconds >= 0 && (
            <Text fontSize="xs" fontWeight="bold" ml={2}>
              {minutes}:{parseSeconds(seconds)}
            </Text>
          )}
        </Flex>
        <IconButton
          aria-label="stop"
          colorScheme="red"
          size="md"
          icon={<MdStop />}
          onClick={onNextPhase}
        />
      </Flex>
    </Flex>
  );
}
