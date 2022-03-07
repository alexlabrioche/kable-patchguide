import {
  Text,
  Flex,
  Icon as ChakraIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ImClock } from "react-icons/im";

interface IProps {
  rule: any;
  mb?: string;
}

export default function RuleCard({ rule, mb }: IProps) {
  const { title, Icon: RuleIcon, type } = rule;
  const Icon: any = RuleIcon || ImClock;
  const creationColor = useColorModeValue("pink.100", "pink.900");
  const evolutionColor = useColorModeValue("teal.100", "teal.900");
  const destructionColor = useColorModeValue("purple.100", "purple.900");
  const color = switchType({
    type,
    creationColor,
    evolutionColor,
    destructionColor,
  });

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
        w="8rem"
        h="8rem"
        color={color}
        position="absolute"
        left="-0.5rem"
        top="-0.5rem"
        zIndex={0}
        transform="rotate(10deg)"
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
