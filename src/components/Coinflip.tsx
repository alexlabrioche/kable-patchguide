import { Flex, IconButton, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { RiCoinLine } from "react-icons/ri";
import { BiLoader } from "react-icons/bi";
import useInterval from "../hooks/useInterval";

export const doCoinflip = () => Math.floor(Math.random() * 2) === 0;

export default function Coinflip() {
  const [isFlipin, setIsFlipin] = useState(false);
  const [isHeads, setIsHeads] = useState(doCoinflip());

  const handleCoinflip = () => {
    setIsFlipin(true);
    setIsHeads(doCoinflip());
  };

  useInterval(() => setIsFlipin(false), 1000);

  return (
    <Flex justifyContent="space-around" alignItems="center" w="full" mt="2">
      <IconButton
        size="lg"
        aria-label="coinflip"
        icon={
          isFlipin ? (
            <Icon as={BiLoader} h={10} w={10} />
          ) : (
            <Icon
              as={RiCoinLine}
              transform={`rotate(${isHeads ? "0deg" : "180deg"})`}
              h={10}
              w={10}
            />
          )
        }
        onClick={handleCoinflip}
        colorScheme={isFlipin ? "gray" : isHeads ? "green" : "orange"}
      />
    </Flex>
  );
}
