import {StatementReference} from "./StatementReference";

/**
 * Observation info
 */
export class Observation {
  public observation_function?: StatementReference;
  public observation_parameter?: StatementReference;
  public aggregation_type?: string;
  public set_id?: string;
}
