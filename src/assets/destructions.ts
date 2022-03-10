import { ImClock } from "react-icons/im";
import { MdUnfoldLess } from "react-icons/md";
import { AiOutlineDisconnect } from "react-icons/ai";
import { VscDebugDisconnect } from "react-icons/vsc";
import { BiBorderAll } from "react-icons/bi";

export const base = [
  {
    title: "COINFLIP For each module patched flip a coin if heads, unpatch",
    Icon: ImClock,
  },
  {
    title: "Choose a module patch every connection",
    Icon: BiBorderAll,
  },
  {
    title: "Choose a module Set it’s controls at maximum",
    Icon: ImClock,
  },
  {
    title: "Unpatch all pitch (1v/oct) input",
    Icon: ImClock,
  },
  {
    title: "Divide a clock by 2",
    Icon: ImClock,
  },
  {
    title:
      "On modules n°: __DICEROLL_TOTALMODULE_DIV4__, unpatch input __RANDOMCOUNT_2-5__",
    Icon: ImClock,
  },
  {
    title: "COINFLIP For each connection, flip a coin if heads, unpatch",
    Icon: ImClock,
  },
  {
    title:
      "On module n° __RANDOMCOUNT_TOTALMODULE__ unpatch __RANDOMCOUNT_2-5__ inputs",
    Icon: ImClock,
  },
  {
    title: "Unpatch __RANDOMCOUNT_5-8__ cables",
    Icon: VscDebugDisconnect,
  },
  {
    title: "Choose a module, unpatch it",
    Icon: AiOutlineDisconnect,
  },
  {
    title: "Use less notes",
    Icon: MdUnfoldLess,
  },
];

export const hemisphere = [
  {
    title: "Choose a patched Hemisphere, unpatch it",
    Icon: ImClock,
  },
];
