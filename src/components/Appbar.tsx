import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FaQuestion } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import ColorModeSwitcher from "./ColorModeSwitcher";
import MoreOptionsMenu from "./MoreOptionsMenu";
interface IProps {
  phase: string;
}

const switchPhaseHelp = (phase: string) => {
  switch (phase) {
    default:
    case "pre-game":
      return {
        title: "kablé",
        content: "",
      };
    case "creation":
      return {
        title: "all thing must start",
        content:
          "Those are the foundation rules. Take time to learn your modules and patch something pleasant (or not)",
      };
    case "evolution":
      return {
        title: "time to evolve",
        content:
          "Follow those rules to make something unpredictable, the timer is here to inform you, no need to hurry",
      };
    case "destruction":
      return {
        title: "is this the end?",
        content: "5 rules to end your patch, or creating something new",
      };
  }
};
export default function HelpDrawer({ phase }: IProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { title, content } = switchPhaseHelp(phase);
  const isPreGame = phase === "pre-game";

  return (
    <>
      <Flex direction="row" align="center" justify="space-between">
        <Text fontSize={isPreGame ? "lg" : "md"} fontWeight="bold">
          {title}
        </Text>
        {isPreGame ? (
          <Flex>
            <ColorModeSwitcher />
            <MoreOptionsMenu />
          </Flex>
        ) : (
          <IconButton
            variant="ghost"
            icon={<FaQuestion />}
            aria-label="help"
            onClick={onOpen}
          />
        )}
      </Flex>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          borderBottomLeftRadius="2xl"
          borderBottomRightRadius="2xl"
        >
          <DrawerHeader
            display="flex"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            Help
            <IconButton
              icon={<CgClose />}
              variant="ghost"
              aria-label="close"
              onClick={onClose}
            />
          </DrawerHeader>
          <DrawerBody>{content}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
