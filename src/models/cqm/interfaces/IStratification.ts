/* eslint-disable @typescript-eslint/naming-convention, import/no-cycle */
import { IStatementReference } from "../index";

export interface IStratification {
  title?: string;

  stratification_id?: string;

  statement?: IStatementReference;
}

/* eslint-enable @typescript-eslint/naming-convention, import/no-cycle */
