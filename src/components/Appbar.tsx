import { Flex, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

interface Iprops {
  phase: string;
}

export default function Appbar({ phase }: Iprops) {
  if (phase !== "pre-game") {
    return null;
  }

  return (
    <Flex
      p={4}
      height="10%"
      direction="row"
      align="center"
      justify="space-between"
    >
      <Text fontSize="md" fontWeight="bold">
        patchlife.
      </Text>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
}
