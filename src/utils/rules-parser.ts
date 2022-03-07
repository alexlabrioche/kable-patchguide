import { GameOptions } from "../components/PreGameSettings";
import { getRandomInt, shuffleArray } from "./random";

const matcher = /(?<=__)([A-z1-9-_]*?)(?=__)/g;

const updateRule = (key: string, str: string, newStr: string) =>
  str.replace(key, newStr);

const shuffleTotalModule = (total: number, divider: number) => {
  const shuffled = shuffleArray(Array.from(Array(total), (_, i) => i + 1));
  return shuffled
    .slice(0, Math.ceil(total / divider))
    .sort((a, b) => a - b)
    .join(", ");
};

const divCeil = (a: number, b: number) => String(Math.ceil(a / b));
const timeCeil = (a: number, b: number) => String(Math.ceil(a * b));

const parser = (rule: string, options: GameOptions | null) => {
  const founds = rule.match(matcher);
  if (!founds || !options) {
    return rule;
  }

  let parsed = rule;
  const total = options.modules;

  for (const found of founds) {
    switch (found) {
      case "TOTALMODULE":
        parsed = updateRule("TOTALMODULE", parsed, String(total));
        break;
      case "TOTALMODULE_DIV3":
        parsed = updateRule("TOTALMODULE_DIV3", parsed, divCeil(total, 3));
        break;
      case "TOTALMODULE_DIV4":
        parsed = updateRule("TOTALMODULE_DIV4", parsed, divCeil(total, 4));
        break;
      case "TOTALMODULE_TIMES2":
        parsed = updateRule("TOTALMODULE_TIMES2", parsed, timeCeil(total, 2));
        break;
      case "DICEROLL_TOTALMODULE_DIV3":
        parsed = updateRule(
          "DICEROLL_TOTALMODULE_DIV3",
          parsed,
          shuffleTotalModule(total, 3)
        );
        break;
      case "DICEROLL_TOTALMODULE_DIV4":
        parsed = updateRule(
          "DICEROLL_TOTALMODULE_DIV4",
          parsed,
          shuffleTotalModule(total, 4)
        );
        break;
      case "RANDOMCOUNT_TOTALMODULE":
        parsed = updateRule(
          "RANDOMCOUNT_TOTALMODULE",
          parsed,
          String(getRandomInt(1, total))
        );
        break;
      case "RANDOMCOUNT_2-5":
        parsed = updateRule(
          "RANDOMCOUNT_2-5",
          parsed,
          String(getRandomInt(2, 5))
        );
        break;
      case "RANDOMCOUNT_5-8":
        parsed = updateRule(
          "RANDOMCOUNT_5-8",
          parsed,
          String(getRandomInt(5, 8))
        );
        break;
      case "RANDOMCOUNT_5-15":
        parsed = updateRule(
          "RANDOMCOUNT_5-15",
          parsed,
          String(getRandomInt(5, 15))
        );
        break;

      default:
        break;
    }
  }
  return parsed.replaceAll("__", "");
};

export function parseRule(
  { title, ...rest }: any,
  options: GameOptions | null
) {
  let rule = { title: parser(title, options), ...rest };
  if (rule.title.includes("COINFLIP")) {
    rule.hasCoinflip = true;
    rule = { ...rule, title: rule.title.replace("COINFLIP", "") };
  }
  return rule;
}
