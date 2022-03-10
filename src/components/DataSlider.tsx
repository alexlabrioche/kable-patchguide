import {
  Box,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { MdViewModule } from "react-icons/md";

interface IProps {
  label: string;
  value: number;
  setValue: Function;
  min: number;
  max: number;
  mb?: string;
}

export default function DataSlider({
  label,
  value,
  setValue,
  min,
  max,
  mb,
}: IProps) {
  const onChange = (val: number) => setValue(val);
  return (
    <Box mb={mb}>
      <Text fontSize="lg" mb="8">
        {label}
      </Text>
      <Box px={4}>
        <Slider
          defaultValue={value}
          aria-label="module-count-slider"
          min={min}
          max={max}
          colorScheme="green"
          onChange={onChange}
        >
          <SliderMark
            value={value}
            textAlign="center"
            mt="-10"
            ml="-4"
            w="8"
            rounded={100}
          >
            {value}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box color="green.500" as={MdViewModule} />
          </SliderThumb>
        </Slider>
      </Box>
    </Box>
  );
}
