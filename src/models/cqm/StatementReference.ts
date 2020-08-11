/**
 *  StatementReference notes a CQL Library/Statement which a given Statement (in which it is embedded) relies upon. This
 * is also used for populations/stratifications/SDEs to reference their defining statement.
 */
export class StatementReference {
  // tslint:disable-next-line:variable-name
  public library_name?: string;
  // tslint:disable-next-line:variable-name
  public statement_name?: string;
  // tslint:disable-next-line:variable-name
  public set_id?: string;
}
