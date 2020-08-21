import {PopulationMap} from "./PopulationMap";
import {StatementReference} from "./StatementReference";

/**
 * The population map for a continuous variable population set.
 */
export class ContinuousVariablePopulationMap extends PopulationMap {

  // tslint:disable-next-line:variable-name
  public IPP?: StatementReference;
  // tslint:disable-next-line:variable-name
  public MSRPOPL?: StatementReference;
  // tslint:disable-next-line:variable-name
  public MSRPOPLEX?: StatementReference;

  constructor() {
    super();
    this.resource_type = "ContinuousVariablePopulationMap";
  }

  public static parse(
    json: any,
    providedInstance: ContinuousVariablePopulationMap = new ContinuousVariablePopulationMap()
  ): ContinuousVariablePopulationMap {
    const newInstance: ContinuousVariablePopulationMap = PopulationMap.parse(json, providedInstance);
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

  public toJSON(): any {
    const result: any = super.toJSON();
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
