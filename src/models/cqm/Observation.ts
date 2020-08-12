import {StatementReference} from "./StatementReference";

/**
 * Observation info
 */
export class Observation {
  // tslint:disable-next-line:variable-name
  public observation_function?: StatementReference;
  // tslint:disable-next-line:variable-name
  public observation_parameter?: StatementReference;
  // tslint:disable-next-line:variable-name
  public aggregation_type?: string;
  // tslint:disable-next-line:variable-name
  public set_id?: string;
}
