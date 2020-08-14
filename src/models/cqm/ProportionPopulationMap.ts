/* eslint-disable import/prefer-default-export, import/no-cycle */
import {PopulationMap} from "./PopulationMap";
import {StatementReference} from "./StatementReference";

/**
 * The population map for a porportion population set.
 */
export class ProportionPopulationMap extends PopulationMap {
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
  // tslint:disable-next-line:variable-name
  public DENEXCEP?: StatementReference;

  public static parse(
    json: any,
    providedInstance: ProportionPopulationMap = new ProportionPopulationMap()
  ): ProportionPopulationMap {
    const newInstance: ProportionPopulationMap = providedInstance;
    newInstance.resource_type = 'ProportionPopulationMap';
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
    if (json.DENEXCEP) {
      newInstance.DENEXCEP = StatementReference.parse(json.DENEXCEP);
    }
    return newInstance;
  }

  public toJSON(): any {
    const result: any = {};
    result.resource_type = 'ProportionPopulationMap';
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
    if (this.DENEXCEP) {
      result.DENEXCEP = this.DENEXCEP.toJSON();
    }
    return result;
  }
}
