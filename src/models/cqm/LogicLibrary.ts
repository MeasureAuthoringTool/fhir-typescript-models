import {StatementDependency} from "./StatementDependency";

/**
 *  CqlElmLibrary encapsulates what used to be a Hash in Ruby, by explicitly specifying
 * a library ID, and the CQL string for that library
 */
export class CqmLogicLibrary {

  // tslint:disable-next-line:variable-name
  public library_name?: string;
  // tslint:disable-next-line:variable-name
  public library_version?: string;
  public cql?: string;
  public elm?: Map<string, any>;
  // tslint:disable-next-line:variable-name
  public elm_annotations?: Map<string, any>;
  // tslint:disable-next-line:variable-name
  public is_main_library?: boolean;

  // tslint:disable-next-line:variable-name
  public statement_dependencies?: Array<StatementDependency>;

  public static parse(
    json: any,
    providedInstance: CqmLogicLibrary = new CqmLogicLibrary()
  ): CqmLogicLibrary {
    // TODO
    const newInstance: CqmLogicLibrary = providedInstance;
    return newInstance;
  }

  toJSON(): any {
    // TODO
    const result: any = {};
  }
}
