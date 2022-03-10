import { ImClock } from "react-icons/im";
import {
  FaVolumeMute,
  FaVolumeOff,
  FaVolumeDown,
  FaDoorClosed,
  FaHandPointer,
} from "react-icons/fa";
import { RiFileUnknowFill, RiDislikeFill } from "react-icons/ri";
import { TiWaves } from "react-icons/ti";
import { GiRopeCoil } from "react-icons/gi";

export const base = [
  {
    title: "Do not listen",
    Icon: FaVolumeMute,
  },
  {
    title: "Start with your least favorite module",
    Icon: RiDislikeFill,
  },
  {
    title: "Start with your least known module",
    Icon: RiFileUnknowFill,
  },
  {
    title: "Triggers are your audio source",
    Icon: FaVolumeOff,
  },
  {
    title: "Use audio as your clock",
    Icon: ImClock,
  },
  {
    title: "Use LFO(s) as sequencer",
    Icon: TiWaves,
  },
  {
    title: "Use modules n°: __DICEROLL_TOTALMODULE_DIV3__",
    Icon: FaHandPointer,
  },
  {
    title: "Use modules n°: __DICEROLL_TOTALMODULE_DIV4__",
    Icon: FaHandPointer,
  },
  {
    title: "Use only gates as modulation",
    Icon: FaDoorClosed,
  },
  {
    title: "Use no attenuation",
    Icon: FaVolumeDown,
  },
  {
    title: "Use exactly __TOTALMODULE__ cables",
    Icon: GiRopeCoil,
  },
];

export const hemisphere = [
  {
    title: "Start with your least favorite Hemisphere App",
    Icon: RiDislikeFill,
  },
  {
    title: "Start with your least known Hemisphere App",
    Icon: RiFileUnknowFill,
  },
  {
    title: "Start with __OC_HEMISPHERE_RANDOM_APP__ Hemisphere App",
    Icon: ImClock,
  },
];

export const stock = [
  {
    title: "Start with your least favorite O_C Stock App",
    Icon: RiDislikeFill,
  },
  {
    title: "Start with your least known O_C Stock App",
    Icon: RiFileUnknowFill,
  },
];
