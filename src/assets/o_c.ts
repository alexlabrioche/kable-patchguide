import { BiBrain } from "react-icons/bi";
import { FaDiceFour } from "react-icons/fa";

export const ocStock = [
  "CopierMaschine",
  "Harrington 1200",
  "Automatonnetz",
  "Quantermain",
  "Meta-Q",
  "Quadraturia",
  "Low-rents",
  "Piqued",
  "Sequins",
  "Dialectic Ping Pong",
  "Viznutcracker, sweet!",
  "Acid curds",
];

export const ocHemisphere = [
  "ASR",
  "AD EG",
  "ADSR EG",
  "Annular Fusion Euclidean Drummer",
  "AttenOff",
  "Binary Counter",
  "BootsNCat",
  "Brancher",
  "Burst",
  "CV Recorder",
  "Calculate",
  "Carpeggio Cartesian Arpeggiator",
  "Clock Divider Multiplier",
  "Clock Skipper",
  "Compare",
  "Dr. Crusher",
  "Dual Quantizer",
  "Enigma, Jr.",
  "Enigma",
  "Envelope Follower",
  "Gate Delay",
  "Gated VCA",
  "LoFi Tape",
  "Logic",
  "LowerRenz",
  "Neural Net",
  "Palimpsest Accent Sequencer",
  "Pong",
  "RunglBook",
  "Scale Duet Quantizer",
  "Schmitt Trigger",
  "Scope",
  "Sequence5",
  "Shift Register",
  "ShiftGate",
  "Shuffle",
  "SkewedLFO",
  "Slew",
  "Squanch Shifting Quantizer",
  "Switch",
  "The Darkest Timeline 2.0",
  "Threshold Logic Neuron",
  "Trending",
  "Trigger Sequencer 16",
  "Trigger Sequencer",
  "VectMorph",
  "VectorEG",
  "VectorLFO",
  "VectorMod",
  "Voltage",
];

const switchActionLabel = (phase: string) => {
  switch (phase) {
    default:
    case "creation":
      return "Start with";
    case "evolution":
      return "Plug one input on";
    case "destruction":
      return "Unplug half of";
  }
};
export const createOcAppsArray = (mode: string, phase: string) => {
  const arr = mode === "stock" ? ocStock : ocHemisphere;
  const label = mode === "stock" ? "Stock" : "Hemisphere";
  const icon = mode === "stock" ? FaDiceFour : BiBrain;
  const actionLabel = switchActionLabel(phase);

  return arr.map((name) => ({
    title: `${actionLabel} ${
      phase === "creation"
        ? name
        : mode === "hemisphere"
        ? "a chosen"
        : "current"
    } ${label} App`,
    Icon: icon,
  }));
};
