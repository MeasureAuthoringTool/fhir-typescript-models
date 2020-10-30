/* eslint-disable @typescript-eslint/naming-convention, import/no-cycle */
import { IDataElement } from "../index";
import { IPatient } from "../../fhir/internal";

export interface ICqmPatient {
  id?: string;

  expected_values?: Array<unknown>;

  notes?: string;

  measure_ids?: Array<string>;

  fhir_patient?: IPatient;

  data_elements?: Array<IDataElement>;

  created_at?: string;

  updated_at?: string;
}

/* eslint-enable @typescript-eslint/naming-convention, import/no-cycle */
