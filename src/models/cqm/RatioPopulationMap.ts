/* eslint-disable import/prefer-default-export, import/no-cycle */
import {PopulationMap} from "./PopulationMap";
import {StatementReference} from "./StatementReference";

/**
 * The population map for a ratio population set.
 */
export class RatioPopulationMap extends PopulationMap {

  // tslint:disable-next-line:variable-name
  public IPP?: StatementReference;
  // tslint:disable-next-line:variable-name
  public DENOM?: StatementReference;
  // tslint:disable-next-line:variable-name
  public NUMER?: StatementReference;
  // tslint:disable-next-line:variable-name
  public NUMEX?: StatementReference;
  // tslint:disable-next-line:variable-name
  public DENEX?: StatementReference;

  constructor() {
    super();
    this.resource_type = "RatioPopulationMap";
  }

  public static parse(
    json: any,
    providedInstance: RatioPopulationMap = new RatioPopulationMap()
  ): RatioPopulationMap {
    const newInstance: RatioPopulationMap = PopulationMap.parse(json, providedInstance);
    if (json.IPP) {
      newInstance.IPP = StatementReference.parse(json.IPP);
    }
    if (json.DENOM) {
      newInstance.DENOM = StatementReference.parse(json.DENOM);
    }
    if (json.NUMER) {
      newInstance.NUMER = StatementReference.parse(json.NUMER);
    }
    if (json.NUMEX) {
      newInstance.NUMEX = StatementReference.parse(json.NUMEX);
    }
    if (json.DENEX) {
      newInstance.DENEX = StatementReference.parse(json.DENEX);
    }
    return newInstance;
  }

  public toJSON(): any {
    const result: any = super.toJSON();
    if (this.IPP) {
      result.IPP = this.IPP.toJSON();
    }
    if (this.DENOM) {
      result.DENOM = this.DENOM.toJSON();
    }
    if (this.NUMER) {
      result.NUMER = this.NUMER.toJSON();
    }
    if (this.NUMEX) {
      result.NUMEX = this.NUMEX.toJSON();
    }
    if (this.DENEX) {
      result.DENEX = this.DENEX.toJSON();
    }
    return result;
  }
}
