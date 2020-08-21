import { StatementReference } from "./StatementReference";

/**
 * Stratification info
 */
export class Stratification {
  public title?: string;
  // tslint:disable-next-line:variable-name
  public stratification_id?: string;
  public statement?: StatementReference;

  public static parse(
    json: any,
    providedInstance: Stratification = new Stratification()
  ): Stratification {
    const newInstance: Stratification = providedInstance;
    if (json.title) {
      newInstance.title = json.title;
    }
    if (json.stratification_id) {
      newInstance.stratification_id = json.stratification_id;
    }
    if (json.statement) {
      newInstance.statement = StatementReference.parse(json.statement);
    }
    return newInstance;
  }

  toJSON(): any {
    const result: any = {};

    if (this.title) {
      result.title = this.title;
    }
    if (this.stratification_id) {
      result.stratification_id = this.stratification_id;
    }
    if (this.statement) {
      result.statement = this.statement.toJSON();
    }
    return result;
  }
}
