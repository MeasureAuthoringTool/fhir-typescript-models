/* eslint-disable import/prefer-default-export, import/no-cycle */
import { IProportionPopulationMap, PopulationMap, StatementReference } from "../index";

/**
 * The population map for a porportion population set.
 */
export class ProportionPopulationMap extends PopulationMap {
  public IPP?: StatementReference;

  public DENOM?: StatementReference;

  public NUMER?: StatementReference;

  public NUMEX?: StatementReference;

  public DENEX?: StatementReference;

  public DENEXCEP?: StatementReference;

  constructor() {
    super();
    this.resource_type = "ProportionPopulationMap";
  }

  public static parse(
    json: IProportionPopulationMap,
    providedInstance: ProportionPopulationMap = new ProportionPopulationMap(),
  ): ProportionPopulationMap {
    const newInstance: ProportionPopulationMap = PopulationMap.parse(
      json,
      providedInstance,
    );
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

  public toJSON(): IProportionPopulationMap {
    const result: IProportionPopulationMap = super.toJSON();
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

/* eslint-enable import/prefer-default-export, import/no-cycle */
