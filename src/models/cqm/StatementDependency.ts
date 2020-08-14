import {StatementReference} from "./StatementReference";

/**
 * Statement is a given CQL Statement within a CQL Library, which has many dependencies.
 */
export class StatementDependency {
  // tslint:disable-next-line:variable-name
  public statement_name?: string;
  // tslint:disable-next-line:variable-name
  public statement_references?: Array<StatementReference>;

  public static parse(
    json: any,
    providedInstance: StatementDependency = new StatementDependency()
  ): StatementDependency {
    const newInstance: StatementDependency = providedInstance;

    if (json.statement_name) {
      newInstance.statement_name = json.statement_name;
    }

    if (json.statement_references) {
      newInstance.statement_references = json.statement_references.map((x: any) => StatementReference.parse(x));
    }
    return newInstance;
  }

  toJSON(): any {
    const result: any = {};

    if (this.statement_name) {
      result.statement_name = this.statement_name;
    }
    if (this.statement_references) {
      result.statement_references = this.statement_references.map((x: StatementReference) => x.toJSON());
    }
    return result;
  }

}
