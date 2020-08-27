/* eslint-disable import/prefer-default-export, import/no-cycle */
import { CohortPopulationMap } from "./CohortPopulationMap";
import { ContinuousVariablePopulationMap } from "./ContinuousVariablePopulationMap";
import { PopulationMap } from "./PopulationMap";
import { ProportionPopulationMap } from "./ProportionPopulationMap";
import { RatioPopulationMap } from "./RatioPopulationMap";

const populationSubclasses: Record<string, typeof PopulationMap> = {
  "CohortPopulationMap": CohortPopulationMap,
  "ContinuousVariablePopulationMap": ContinuousVariablePopulationMap,
  "ProportionPopulationMap": ProportionPopulationMap,
  "RatioPopulationMap": RatioPopulationMap,
};

export function lookupPopulationMapSubclass(
  typeName: string
): typeof PopulationMap | undefined {
  return populationSubclasses[typeName];
}

/* eslint-enable import/prefer-default-export, import/no-cycle */
