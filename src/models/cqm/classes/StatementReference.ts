/* eslint-disable import/prefer-default-export, import/no-cycle */
import { IStatementReference } from "../index";

/**
 *  StatementReference notes a CQL Library/Statement which a given Statement (in which it is embedded) relies upon. This
 * is also used for populations/stratifications/SDEs to reference their defining statement.
 */
export class StatementReference {
  public library_name?: string;

  public statement_name?: string;

  public static parse(
    json: IStatementReference,
    providedInstance: StatementReference = new StatementReference(),
  ): StatementReference {
    const newInstance: StatementReference = providedInstance;

    if (json.library_name) {
      newInstance.library_name = json.library_name;
    }
    if (json.statement_name) {
      newInstance.statement_name = json.statement_name;
    }
    return newInstance;
  }

  toJSON(): IStatementReference {
    const result: IStatementReference = {};

    if (this.library_name) {
      result.library_name = this.library_name;
    }
    if (this.statement_name) {
      result.statement_name = this.statement_name;
    }
    return result;
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
