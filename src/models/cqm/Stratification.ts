import {StatementReference} from "./StatementReference";

/**
 * Stratification info
 */
export class Stratification {
  public title?: string;
  // tslint:disable-next-line:variable-name
  public stratification_id?: string;
  // tslint:disable-next-line:variable-name
  public set_id?: string;
  public statement?: StatementReference;
}
