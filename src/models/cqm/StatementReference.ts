/**
 *  StatementReference notes a CQL Library/Statement which a given Statement (in which it is embedded) relies upon. This
 * is also used for populations/stratifications/SDEs to reference their defining statement.
 */
export class StatementReference {
  // tslint:disable-next-line:variable-name
  public library_name?: string;
  // tslint:disable-next-line:variable-name
  public statement_name?: string;

  public static parse(
    json: any,
    providedInstance: StatementReference = new StatementReference()
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

  toJSON(): any {
    const result: any = {};

    if (this.library_name) {
      result.library_name = this.library_name;
    }
    if (this.statement_name) {
      result.statement_name = this.statement_name;
    }
    return result;
  }
  
}
