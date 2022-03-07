import {
  Text,
  IconButton,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
} from "@chakra-ui/react";
import { MouseEventHandler, useMemo, useState } from "react";
import { getDestructions, getEvolutions } from "../assets";
import useCountdown from "../hooks/useCountdown";
import useReadLocalStorage from "../hooks/useReadLocalStorage";
import { getRandomInt } from "../utils/random";
import { GameOptions } from "./PreGameSettings";
import { MdStop, MdSkipNext } from "react-icons/md";
import { parseRule } from "../utils/rules-parser";
import RuleCard from "./RuleCard";
import Coinflip from "./Coinflip";

interface IProps {
  onNextPhase: MouseEventHandler;
}

const parseSeconds = (secs: number) => (secs < 10 ? `0${secs}` : secs);

export default function EvolutionPhase({ onNextPhase }: IProps) {
  const gameOptions: GameOptions | null = useReadLocalStorage("game-options");
  const evolutions = useMemo(() => getEvolutions(gameOptions), [gameOptions]);
  const destructions = useMemo(
    () => getDestructions(gameOptions),
    [gameOptions]
  );
  const [now, setNow] = useState(new Date().getTime());
  const [rule, setRule] = useState(
    parseRule(evolutions[getRandomInt(0, evolutions.length)], gameOptions)
  );
  const intervalMs = gameOptions ? gameOptions.timer * 60 * 1000 : 60000;
  const { minutes, seconds, countdown } = useCountdown(now + intervalMs);

  const setNewRule = () => {
    setNow(new Date().getTime());
    const randomInt = getRandomInt(0, 10);
    let rules: any = evolutions;
    if (randomInt > +7) {
      rules = destructions;
    }
    setRule(parseRule(rules[getRandomInt(0, rules.length)], gameOptions));
  };

  return (
    <Flex p={4} height="full" direction="column">
      <Text fontWeight="bold" mb={8} textAlign="center">
        It's time to evolve
      </Text>
      <Flex flex={1} direction="column" justify="center" align="center">
        <RuleCard rule={rule} />
        {rule.hasCoinflip && <Coinflip />}
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
