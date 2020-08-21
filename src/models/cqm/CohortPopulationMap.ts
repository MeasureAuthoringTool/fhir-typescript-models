/* eslint-disable import/prefer-default-export, import/no-cycle */
import {PopulationMap} from "./PopulationMap";
import {StatementReference} from "./StatementReference";

/**
 * The population map for a cohort population set.
 */
export class CohortPopulationMap extends PopulationMap {

  // tslint:disable-next-line:variable-name
  public IPP?: StatementReference;

  constructor() {
    super();
    this.resource_type = "CohortPopulationMap";
  }

  public static parse(
    json: any,
    providedInstance: CohortPopulationMap = new CohortPopulationMap()
  ): CohortPopulationMap {
    const newInstance: CohortPopulationMap = PopulationMap.parse(json, providedInstance);
    if (json.IPP) {
      newInstance.IPP = StatementReference.parse(json.IPP);
    }
    return newInstance;
  }

  public toJSON(): any {
    const result: any = super.toJSON();
    if (this.IPP) {
      result.IPP = this.IPP.toJSON();
    }
    return result;
  }

}
