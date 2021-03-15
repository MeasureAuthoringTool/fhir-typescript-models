/* eslint-disable import/prefer-default-export, import/no-cycle */
import { ICqmObservation, StatementReference } from "../index";

/**
 * Observation info
 */
export class CqmObservation {
  public observation_function?: StatementReference;

  public observation_parameter?: StatementReference;

  public aggregation_type?: string;

  public set_id?: string;

  public static parse(
    json: ICqmObservation,
    providedInstance: CqmObservation = new CqmObservation(),
  ): CqmObservation {
    const newInstance: CqmObservation = providedInstance;

    if (json.observation_function) {
      newInstance.observation_function = StatementReference.parse(
        json.observation_function,
      );
    }
    if (json.observation_parameter) {
      newInstance.observation_parameter = StatementReference.parse(
        json.observation_parameter,
      );
    }
    if (json.aggregation_type) {
      newInstance.aggregation_type = json.aggregation_type;
    }
    if (json.set_id) {
      newInstance.set_id = json.set_id;
    }
    return newInstance;
  }

  toJSON(): ICqmObservation {
    const result: ICqmObservation = {};

    if (this.observation_function) {
      result.observation_function = this.observation_function.toJSON();
    }
    if (this.observation_parameter) {
      result.observation_parameter = this.observation_parameter.toJSON();
    }
    if (this.aggregation_type) {
      result.aggregation_type = this.aggregation_type;
    }
    if (this.set_id) {
      result.set_id = this.set_id;
    }
    return result;
  }
}

/* eslint-enable import/prefer-default-export, import/no-cycle */
