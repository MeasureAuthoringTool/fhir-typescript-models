/* eslint-disable import/prefer-default-export, import/no-cycle */

import {StatementReference} from "./StatementReference";

/**
 * Base class for the population maps
 */
export class PopulationMap {

  // tslint:disable-next-line:variable-name
  public resource_type?: string;
  // Can be converted into stratification. Not persisted to mongo.
  // tslint:disable-next-line:variable-name
  public STRAT?: StatementReference;

  constructor() {
    this.resource_type = 'PopulationMap';
  }

  public static parse(
    json: any,
    providedInstance: PopulationMap = new PopulationMap()
  ): PopulationMap {
    const newInstance: PopulationMap = providedInstance;
    if (json.STRAT) {
      newInstance.STRAT = StatementReference.parse(json.STRAT);
    }
    return newInstance;
  }

  toJSON(): any {
    const result: any = {};
    result.resource_type = this.resource_type;
    if (this.STRAT) {
      result.STRAT = this.STRAT.toJSON();
    }
    return result;
  }

  get codes(): Array<string> {
    return Object.keys(this).filter(value => value !== "resource_type");
  }

}
