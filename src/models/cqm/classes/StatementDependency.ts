/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  IStatementDependency,
  IStatementReference,
  StatementReference,
} from "../index";

/**
 * Statement is a given CQL Statement within a CQL Library, which has many dependencies.
 */
export class StatementDependency {
  public statement_name?: string;

  public statement_references?: Array<StatementReference>;

  public static parse(
    json: IStatementDependency,
    providedInstance: StatementDependency = new StatementDependency(),
  ): StatementDependency {
    const newInstance: StatementDependency = providedInstance;

    if (json.statement_name) {
      newInstance.statement_name = json.statement_name;
    }

    if (json.statement_references) {
      newInstance.statement_references = json.statement_references.map(
        (x: IStatementReference) => StatementReference.parse(x),
      );
    }
    return newInstance;
  }

  toJSON(): IStatementDependency {
    const result: IStatementDependency = {};

    if (this.statement_name) {
      result.statement_name = this.statement_name;
    }
    if (this.statement_references) {
      result.statement_references = this.statement_references.map(
        (x: StatementReference) => x.toJSON(),
      );
    }
    return result;
  }
}

/* eslint-enable import/prefer-default-export, import/no-cycle */
