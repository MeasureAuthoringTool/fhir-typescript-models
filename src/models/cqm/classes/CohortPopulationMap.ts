/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  ICohortPopulationMap,
  PopulationMap,
  StatementReference,
} from "../index";

/**
 * The population map for a cohort population set.
 */
export class CohortPopulationMap extends PopulationMap {
  public IPP?: StatementReference;

  constructor() {
    super();
    this.resource_type = "CohortPopulationMap";
  }

  public static parse(
    json: ICohortPopulationMap,
    providedInstance: CohortPopulationMap = new CohortPopulationMap(),
  ): CohortPopulationMap {
    const newInstance: CohortPopulationMap = PopulationMap.parse(
      json,
      providedInstance,
    );
    if (json.IPP) {
      newInstance.IPP = StatementReference.parse(json.IPP);
    }
    return newInstance;
  }

  public toJSON(): ICohortPopulationMap {
    const result: ICohortPopulationMap = super.toJSON();
    if (this.IPP) {
      result.IPP = this.IPP.toJSON();
    }
    return result;
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
