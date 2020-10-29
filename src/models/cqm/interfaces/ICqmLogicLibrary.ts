/* eslint-disable @typescript-eslint/naming-convention, import/no-cycle */
import { IStatementDependency } from "../index";

export interface ICqmLogicLibrary {
  library_name?: string;

  library_version?: string;

  cql?: string;

  elm?: unknown;

  elm_annotations?: unknown;

  is_main_library?: boolean;

  statement_dependencies?: Array<IStatementDependency>;
}

/* eslint-enable @typescript-eslint/naming-convention, import/no-cycle */
