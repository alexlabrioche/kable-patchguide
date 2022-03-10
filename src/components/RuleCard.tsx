import {
  Text,
  Flex,
  Icon as ChakraIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { ImClock } from "react-icons/im";
import { getRandomInt } from "../utils/random";
import { doCoinflip } from "./Coinflip";

interface IProps {
  rule: any;
  mb?: string;
}

export default function RuleCard({ rule, mb }: IProps) {
  const { title, Icon: RuleIcon, type } = rule;
  const Icon: any = RuleIcon || ImClock;
  const creationColor = useColorModeValue("pink.100", "pink.800");
  const evolutionColor = useColorModeValue("teal.100", "teal.800");
  const destructionColor = useColorModeValue("purple.100", "purple.800");

  const color = switchType({
    type,
    creationColor,
    evolutionColor,
    destructionColor,
  });

  const isHead = useMemo(
    () => doCoinflip(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rule]
  );

  const shape = useMemo(
    () => ({
      w: `${getRandomInt(112, 164)}px`,
      left: `${getRandomInt(-20, -5)}px`,
      top: isHead ? `${getRandomInt(-20, -5)}px` : "auto",
      bottom: isHead ? "auto" : `${getRandomInt(-20, -5)}px`,
      transform: `rotate(${getRandomInt(-15, 15)}deg)`,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rule]
  );

  return (
    <Flex
      border="4px"
      borderColor={color}
      boxShadow="xl"
      borderRadius="xl"
      p={4}
      width="full"
      position="relative"
      overflow="hidden"
      minHeight="10rem"
      justify="center"
      align="center"
      mb={mb}
    >
      <ChakraIcon
        as={Icon}
        w={shape.w}
        h="auto"
        color={color}
        position="absolute"
        left={shape.left}
        top={shape.top}
        bottom={shape.bottom}
        zIndex={0}
        transform={shape.transform}
      />
      <Text fontWeight="bold" textAlign="center" fontSize="xl" zIndex={1}>
        {title}
      </Text>
    </Flex>
  );
}

const switchType = ({
  type,
  creationColor,
  evolutionColor,
  destructionColor,
}: any) => {
  switch (type) {
    default:
    case "creation":
      return creationColor;
    case "evolution":
      return evolutionColor;
    case "destruction":
      return destructionColor;
  }
};
