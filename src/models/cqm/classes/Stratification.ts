/* eslint-disable import/prefer-default-export, import/no-cycle */
import { IStratification, StatementReference } from "../index";

/**
 * Stratification info
 */
export class Stratification {
  public title?: string;

  public stratification_id?: string;

  public statement?: StatementReference;

  public static parse(
    json: IStratification,
    providedInstance: Stratification = new Stratification(),
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

  toJSON(): IStratification {
    const result: IStratification = {};

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

/* eslint-enable import/prefer-default-export, import/no-cycle */
