/* eslint-disable @typescript-eslint/naming-convention, import/no-cycle */
import {
  ICqmObservation,
  IPopulationMap,
  IStatementReference,
  IStratification,
} from "../index";

export interface IPopulationSet {
  populations?: IPopulationMap;

  stratifications?: Array<IStratification>;

  supplemental_data_elements?: Array<IStatementReference>;

  observations?: Array<ICqmObservation>;

  title?: string;

  population_set_id?: string;

}

/* eslint-enable @typescript-eslint/naming-convention, import/no-cycle */
