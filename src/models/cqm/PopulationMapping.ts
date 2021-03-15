/* eslint-disable import/prefer-default-export, import/no-cycle */
import { CohortPopulationMap } from "./classes/CohortPopulationMap";
import { ContinuousVariablePopulationMap } from "./classes/ContinuousVariablePopulationMap";
import { PopulationMap } from "./classes/PopulationMap";
import { ProportionPopulationMap } from "./classes/ProportionPopulationMap";
import { RatioPopulationMap } from "./classes/RatioPopulationMap";

const populationSubclasses: Record<string, typeof PopulationMap> = {
  "CohortPopulationMap": CohortPopulationMap,
  "ContinuousVariablePopulationMap": ContinuousVariablePopulationMap,
  "ProportionPopulationMap": ProportionPopulationMap,
  "RatioPopulationMap": RatioPopulationMap,
};

export function lookupPopulationMapSubclass(
  typeName: string,
): typeof PopulationMap | undefined {
  return populationSubclasses[typeName];
}

/* eslint-enable import/prefer-default-export, import/no-cycle */
