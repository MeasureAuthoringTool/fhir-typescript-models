/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  IPopulationMap,
  StatementReference,
} from "../index";

/**
 * Base class for the population maps
 */
export class PopulationMap {
  public resource_type?: string;

  // Can be converted into stratification. Not persisted to mongo.
  public STRAT?: StatementReference;

  // All supported codes
  static readonly ALL_POPULATION_CODES = ["STRAT", "IPP", "DENOM", "DENEX", "NUMER", "NUMEX", "DENEXCEP", "MSRPOPL", "OBSERV", "MSRPOPLEX"];

  constructor() {
    this.resource_type = "PopulationMap";
  }

  public static parse(
    json: IPopulationMap,
    providedInstance: PopulationMap = new PopulationMap(),
  ): PopulationMap {
    const newInstance: PopulationMap = providedInstance;
    if (json.STRAT) {
      newInstance.STRAT = StatementReference.parse(json.STRAT);
    }
    return newInstance;
  }

  toJSON(): IPopulationMap {
    const result: IPopulationMap = {};
    result.resource_type = this.resource_type;
    if (this.STRAT) {
      result.STRAT = this.STRAT.toJSON();
    }
    return result;
  }

  get codes(): Array<string> {
    return Object.keys(this).filter((value) => PopulationMap.ALL_POPULATION_CODES.includes(value));
  }
}

/* eslint-enable import/prefer-default-export, import/no-cycle */
