import {StatementReference} from "./StatementReference";

/**
 * Statement is a given CQL Statement within a CQL Library, which has many dependencies.
 */
export class StatementDependency {
  // tslint:disable-next-line:variable-name
  public statement_name?: string;
  // tslint:disable-next-line:variable-name
  public statement_references?: Array<StatementReference>;
}
