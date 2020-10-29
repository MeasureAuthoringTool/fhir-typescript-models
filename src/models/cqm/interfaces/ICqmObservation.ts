/* eslint-disable @typescript-eslint/naming-convention, import/no-cycle */
import { IStatementReference } from "../index";

export interface ICqmObservation {
  observation_function?: IStatementReference

  observation_parameter?: IStatementReference;

  aggregation_type?: string;

  set_id?: string;
}

/* eslint-enable @typescript-eslint/naming-convention, import/no-cycle */
