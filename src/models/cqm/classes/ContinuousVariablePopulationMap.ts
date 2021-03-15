/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  IContinuousVariablePopulationMap,
  PopulationMap,
  StatementReference,
} from "../index";

/**
 * The population map for a continuous variable population set.
 */
export class ContinuousVariablePopulationMap extends PopulationMap {
  public IPP?: StatementReference;

  public MSRPOPL?: StatementReference;

  public MSRPOPLEX?: StatementReference;

  constructor() {
    super();
    this.resource_type = "ContinuousVariablePopulationMap";
  }

  public static parse(
    json: IContinuousVariablePopulationMap,
    providedInstance: ContinuousVariablePopulationMap = new ContinuousVariablePopulationMap(),
  ): ContinuousVariablePopulationMap {
    const newInstance: ContinuousVariablePopulationMap = PopulationMap.parse(
      json,
      providedInstance,
    );
    if (json.IPP) {
      newInstance.IPP = StatementReference.parse(json.IPP);
    }
    if (json.MSRPOPL) {
      newInstance.MSRPOPL = StatementReference.parse(json.MSRPOPL);
    }
    if (json.MSRPOPLEX) {
      newInstance.MSRPOPLEX = StatementReference.parse(json.MSRPOPLEX);
    }
    return newInstance;
  }

  public toJSON(): IContinuousVariablePopulationMap {
    const result: IContinuousVariablePopulationMap = super.toJSON();
    if (this.IPP) {
      result.IPP = this.IPP.toJSON();
    }
    if (this.MSRPOPL) {
      result.MSRPOPL = this.MSRPOPL.toJSON();
    }
    if (this.MSRPOPLEX) {
      result.MSRPOPLEX = this.MSRPOPLEX.toJSON();
    }
    return result;
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
