import { GameOptions } from "../components/PreGameSettings";
import * as creationsAssets from "../assets/creations";
import * as evolutionsAssets from "../assets/evolutions";
import * as destructionsAssets from "../assets/destructions";
import { shuffleArray } from "./random";
import { createOcAppsArray } from "../assets/o_c";
import { parseRule } from "./rules-parser";

export const createShuffleCreations = (options: GameOptions | null) => {
  if (!options) {
    return creationsAssets.base;
  }

  let oc: Array<object> = [];

  let rules = [];
  const ocStockArray = createOcAppsArray("stock", "creation");
  const ocHemisphereArray = createOcAppsArray("hemisphere", "creation");

  if (options.ocHemisphere) {
    oc = ocHemisphereArray;
  }
  if (options.ocStock) {
    oc = ocStockArray;
  }
  if (options.ocStock && options.ocHemisphere) {
    oc = [
      ...shuffleArray(ocHemisphereArray).slice(0, ocStockArray.length),
      ...ocStockArray,
    ];
  }
  if (oc.length > 0) {
    rules.push(shuffleArray(oc)[0]);
  }
  shuffleArray(creationsAssets.base).forEach((rule) => {
    rules.push(rule);
  });

  return rules.map((r) => parseRule({ ...r, type: "creation" }, options));
};

export const createShuffleEvolutions = (options: GameOptions | null) => {
  if (!options) {
    return evolutionsAssets.base;
  }

  let oc: Array<object> = [];
  let rules: Array<object> = [];

  const ocStockArray = createOcAppsArray("stock", "evolution");
  const ocHemisphereArray = createOcAppsArray("hemisphere", "evolution");

  if (options.ocHemisphere) {
    oc = ocHemisphereArray;
    evolutionsAssets.hemisphere.forEach((rule) => {
      rules.push(rule);
    });
  }

  if (options.ocStock) {
    oc = ocStockArray;
  }

  if (options.ocStock && options.ocHemisphere) {
    oc = [
      ...shuffleArray(ocHemisphereArray).slice(
        0,
        Math.floor(ocHemisphereArray.length / 2)
      ),
      ...shuffleArray(ocStockArray).slice(
        0,
        Math.floor(ocStockArray.length / 3)
      ),
    ];
  }

  shuffleArray(oc)
    .slice(0, 2)
    .forEach((rule) => {
      rules.push(rule);
    });

  evolutionsAssets.base.forEach((rule) => {
    rules.push(rule);
  });

  return shuffleArray(rules).map((r) =>
    parseRule({ ...r, type: "evolution" }, options)
  );
};

export const createShuffleDestructions = (options: GameOptions | null) => {
  if (!options) {
    return destructionsAssets.base;
  }

  let oc: Array<object> = [];
  let rules: Array<object> = [];

  const ocStockArray = createOcAppsArray("stock", "destruction");
  const ocHemisphereArray = createOcAppsArray("hemisphere", "destruction");

  if (options.ocHemisphere) {
    oc = ocHemisphereArray;
    destructionsAssets.hemisphere.forEach((rule) => {
      rules.push(rule);
    });
  }

  if (options.ocStock) {
    oc = ocStockArray;
  }

  if (options.ocStock && options.ocHemisphere) {
    oc = [
      ...shuffleArray(ocHemisphereArray).slice(
        0,
        Math.floor(ocHemisphereArray.length / 2)
      ),
      ...shuffleArray(ocStockArray).slice(
        0,
        Math.floor(ocStockArray.length / 3)
      ),
    ];
  }

  shuffleArray(oc)
    .slice(0, 2)
    .forEach((rule) => {
      rules.push(rule);
    });

  destructionsAssets.base.forEach((rule) => {
    rules.push(rule);
  });

  return shuffleArray(rules).map((r) =>
    parseRule({ ...r, type: "destruction" }, options)
  );
};
