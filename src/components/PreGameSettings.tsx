import { Flex, Button, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import DataSlider from "./DataSlider";
import useLocalStorage from "../hooks/useLocalStorage";
import { ChangeEvent, MouseEventHandler } from "react";
import Appbar from "./Appbar";

interface IProps {
  onNextPhase: MouseEventHandler;
}

export interface GameOptions {
  modules: number;
  timer: number;
  vcv: boolean;
  ocStock: boolean;
  ocHemisphere: boolean;
}

const defaultGameOptions: GameOptions = {
  modules: 10,
  timer: 5,
  vcv: false,
  ocStock: false,
  ocHemisphere: false,
};

export default function PreGameSettings({ onNextPhase }: IProps) {
  const [gameOptions, setGameOptions] = useLocalStorage(
    "game-options",
    defaultGameOptions
  );
  const setSliderValue = (key: string) => (value: number) => {
    setGameOptions((s) => ({ ...s, [key]: value }));
  };

  const onCheckboxChange =
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setGameOptions((s) => ({ ...s, [key]: e.target.checked }));
    };

  return (
    <Flex flex={1} direction="column" height="full" margin="auto" p="4">
      <Appbar phase="pre-game" />
      <Flex flex={1} />
      <DataSlider
        label="Timer"
        value={gameOptions.timer}
        setValue={setSliderValue("timer")}
        min={1}
        max={10}
        mb="4"
      />
      <DataSlider
        label="Number of modules"
        value={gameOptions.modules}
        setValue={setSliderValue("modules")}
        min={10}
        max={50}
      />
      <CheckboxGroup colorScheme="green" size="lg">
        <Stack mt={8} spacing={[1, 5]} direction={["column", "row"]}>
          <Checkbox
            onChange={onCheckboxChange("ocStock")}
            isChecked={gameOptions.ocStock}
          >
            O_C Stock
          </Checkbox>
          <Checkbox
            size="lg"
            onChange={onCheckboxChange("ocHemisphere")}
            isChecked={gameOptions.ocHemisphere}
          >
            O_C hemisphere
          </Checkbox>
        </Stack>
      </CheckboxGroup>
      <Flex flex={1} />
      <Button colorScheme="green" mt={16} w="full" onClick={onNextPhase}>
        Let's patch!
      </Button>
    </Flex>
  );
}
