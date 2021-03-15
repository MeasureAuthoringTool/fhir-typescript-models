/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  ICqmLogicLibrary,
  IStatementDependency,
  StatementDependency,
} from "../index";

/**
 *  CqlElmLibrary encapsulates what used to be a Hash in Ruby, by explicitly specifying
 * a library ID, and the CQL string for that library
 */
export class CqmLogicLibrary {
  public library_name?: string;

  public library_version?: string;

  public cql?: string;

  // ELM json
  public elm?: unknown;

  public elm_annotations?: unknown;

  public is_main_library?: boolean;

  public statement_dependencies?: Array<StatementDependency>;

  public static parse(
    json: ICqmLogicLibrary,
    providedInstance: CqmLogicLibrary = new CqmLogicLibrary(),
  ): CqmLogicLibrary {
    const newInstance: CqmLogicLibrary = providedInstance;

    if (json.library_name) {
      newInstance.library_name = json.library_name;
    }
    if (json.library_version) {
      newInstance.library_version = json.library_version;
    }
    if (json.cql) {
      newInstance.cql = json.cql;
    }
    if (json.elm) {
      newInstance.elm = json.elm;
    }
    if (json.elm_annotations) {
      newInstance.elm_annotations = json.elm_annotations;
    }
    if (json.is_main_library != null) {
      newInstance.is_main_library = json.is_main_library;
    }
    if (json.statement_dependencies) {
      newInstance.statement_dependencies = json.statement_dependencies.map(
        (x: IStatementDependency) => StatementDependency.parse(x),
      );
    }
    return newInstance;
  }

  toJSON(): ICqmLogicLibrary {
    const result: ICqmLogicLibrary = {};

    if (this.library_name) {
      result.library_name = this.library_name;
    }
    if (this.library_version) {
      result.library_version = this.library_version;
    }
    if (this.cql) {
      result.cql = this.cql;
    }
    if (this.elm) {
      result.elm = this.elm;
    }
    if (this.elm_annotations) {
      result.elm_annotations = this.elm_annotations;
    }
    if (this.is_main_library != null) {
      result.is_main_library = this.is_main_library;
    }
    if (this.statement_dependencies) {
      result.statement_dependencies = this.statement_dependencies.map(
        (x: StatementDependency) => x.toJSON(),
      );
    }
    return result;
  }
}

/* eslint-enable import/prefer-default-export, import/no-cycle */
