import { ImClock } from "react-icons/im";
import { GameOptions } from "../components/PreGameSettings";

const base = [
  {
    title: "Do not listen",
    Icon: ImClock,
    type: "creation",
  },
  {
    title: "Start with your least favorite module",
    Icon: ImClock,
    type: "creation",
  },
  {
    title: "Start with your least known module",
    Icon: ImClock,
    type: "creation",
  },
  {
    title: "Triggers are your audio source",
    Icon: ImClock,
    type: "creation",
  },
  {
    title: "Use audio as your clock",
    Icon: ImClock,
    type: "creation",
  },
  {
    title: "Use LFO(s) as sequencer",
    Icon: ImClock,
    type: "creation",
  },
  {
    title: "Use modules n°: __DICEROLL_TOTALMODULE_DIV3__",
    Icon: ImClock,
    type: "creation",
  },
  {
    title: "Use modules n°: __DICEROLL_TOTALMODULE_DIV4__",
    Icon: ImClock,
    type: "creation",
  },
  {
    title: "Use only gates as modulation",
    Icon: ImClock,
    type: "creation",
  },
  {
    title: "Use no attenuation",
    Icon: ImClock,
    type: "creation",
  },
  {
    title: "Use exactly __TOTALMODULE__ cables",
    Icon: ImClock,
    type: "creation",
  },
];

const hemisphere = [
  {
    title: "Start with only Hemisphere Apps and a sound source",
    Icon: ImClock,
    type: "creation",
  },
  {
    title: "Start with your least favorite Hemisphere App",
    Icon: ImClock,
    type: "creation",
  },
  {
    title: "Start with your least known Hemisphere App",
    Icon: ImClock,
    type: "creation",
  },
];

const stock = [
  {
    title: "Start with your least favorite O_C Stock App",
    Icon: ImClock,
    type: "creation",
  },
  {
    title: "Start with your least known O_C Stock App",
    Icon: ImClock,
    type: "creation",
  },
];

export const getCreations = (options: GameOptions | null) => {
  let creations = base;
  if (!options) {
    return creations;
  }
  if (options.ocHemisphere) {
    creations = [...creations, ...hemisphere];
  }
  if (options.ocStock) {
    creations = [...creations, ...stock];
  }
  return creations;
};
