/* eslint-disable @typescript-eslint/naming-convention, import/no-cycle */
import { IStatementReference } from "../index";

export interface IStatementDependency {
  statement_name?: string;

  statement_references?: Array<IStatementReference>;
}

/* eslint-enable @typescript-eslint/naming-convention, import/no-cycle */
