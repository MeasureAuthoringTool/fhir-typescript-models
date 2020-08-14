/* eslint-disable import/prefer-default-export, import/no-cycle */

/**
 * Base class for the population maps
 */
export class PopulationMap {

  // tslint:disable-next-line:variable-name
  public resource_type?: string;

  public static parse(
    json: any,
    providedInstance: PopulationMap = new PopulationMap()
  ): PopulationMap {
    const newInstance: PopulationMap = providedInstance;
    newInstance.resource_type = 'PopulationMap';
    return newInstance;
  }

  toJSON(): any {
    const result: any = {};
    result.resource_type = 'PopulationMap';
    return result;
  }

}
