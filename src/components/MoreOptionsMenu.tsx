import { ChangeEvent } from "react";
import {
  IconButton,
  IconButtonProps,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import useLocalStorage from "../hooks/useLocalStorage";
import { defaultGameOptions } from "./PreGameSettings";

type MoreOptionsMenuProps = Omit<IconButtonProps, "aria-label">;

const MoreOptionsMenu: React.FC<MoreOptionsMenuProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [gameOptions, setGameOptions] = useLocalStorage(
    "game-options",
    defaultGameOptions
  );

  const onCheckboxChange =
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      // e.preventDefault();
      // e.stopPropagation();
      setGameOptions((s) => ({ ...s, [key]: e.target.checked }));
    };

  return (
    <>
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
            Options
            <IconButton
              icon={<CgClose />}
              variant="ghost"
              aria-label="close"
              onClick={onClose}
            />
          </DrawerHeader>
          <DrawerBody>
            <CheckboxGroup colorScheme="green" size="lg">
              <Stack my={4} spacing={[1, 5]} direction={["column", "row"]}>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={onOpen}
        icon={<FiMoreVertical />}
        aria-label="more-options"
        {...props}
      />
    </>
  );
};

export default MoreOptionsMenu;
