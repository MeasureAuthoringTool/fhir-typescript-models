/* eslint-disable @typescript-eslint/naming-convention, import/no-cycle */
import { ILibrary, IMeasure, IValueSet } from "../../fhir/internal";
import { ICqmLogicLibrary, IDataElement, IPopulationSet } from "../index";

export interface ICqmMeasure {
  id?: string;

  cms_id?: string;

  title?: string;

  description?: string;

  set_id?: string;

  calculation_method?: string;

  calculate_sdes?: boolean;

  fhir_measure?: IMeasure;

  libraries?: Array<ILibrary>;

  value_sets?: Array<IValueSet>;

  cql_libraries?: Array<ICqmLogicLibrary>;

  main_cql_library?: string;

  source_data_criteria?: Array<IDataElement>;

  population_sets?: Array<IPopulationSet>;

  measure_period?: unknown;

  created_at?: string;

  updated_at?: string;

  code_systems_by_name?: Array<Array<string>>;

}

/* eslint-enable @typescript-eslint/naming-convention, import/no-cycle */
