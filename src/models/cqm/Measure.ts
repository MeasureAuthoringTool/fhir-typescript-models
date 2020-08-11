import {Library} from "../classes/Library";
import {Measure} from "../classes/Measure";
import {ValueSet} from "../classes/ValueSet";
import {CqmDataElement} from "./DataElement";
import {CqmLogicLibrary} from "./LogicLibrary";
import {CqmMeasurePackage} from "./MeasurePackage";
import { ILibrary } from "../interfaces/ILibrary";
import {IValueSet} from "../interfaces/IValueSet";

export class CqmMeasure {
  // tslint:disable-next-line:variable-name
  public cms_id?: string;
  public title?: string;
  public description?: string;
  // tslint:disable-next-line:variable-name
  public set_id?: string;
  // tslint:disable-next-line:variable-name
  public calculation_method?: string;
  // tslint:disable-next-line:variable-name
  public calculate_sdes?: boolean;
  // tslint:disable-next-line:variable-name
  public fhir_measure?: Measure;
  public libraries?: Array<Library>;
  // tslint:disable-next-line:variable-name
  public value_sets?: Array<ValueSet>;
  public package?: CqmMeasurePackage;
  // tslint:disable-next-line:variable-name
  public cql_libraries?: Array<CqmLogicLibrary>;
  // tslint:disable-next-line:variable-name
  public main_cql_library?: string;
  // tslint:disable-next-line:variable-name
  public source_data_criteria?: Array<CqmDataElement>;


  public static parse(
    json: any,
    providedInstance: CqmMeasure = new CqmMeasure()
  ): CqmMeasure {
    const newInstance: CqmMeasure = providedInstance;

    newInstance.cms_id = json.cms_id;
    newInstance.title = json.title;
    newInstance.description = json.description;
    newInstance.set_id = json.set_id;
    newInstance.calculation_method = json.calculation_method;
    newInstance.calculate_sdes = json.calculate_sdes;

    if (json.fhir_measure) {
      newInstance.fhir_measure = Measure.parse(json.fhir_measure);
    }

    if (json.libraries) {
      newInstance.libraries = json.libraries.map((x: ILibrary) => Library.parse(x));
    }

    if (json.value_sets) {
      newInstance.value_sets = json.value_sets.map((x: IValueSet) => ValueSet.parse(x));
    }

    if (json.package) {
      newInstance.package = CqmMeasurePackage.parse(json.package);
    }

    if (json.cql_libraries) {
      // @ts-ignore
      newInstance.cql_libraries = json.cql_libraries.map((x) => CqmLogicLibrary.parse(x));
    }

    newInstance.main_cql_library = json.cql_libraries;

    if (json.source_data_criteria) {
      // @ts-ignore
      newInstance.source_data_criteria = json.source_data_criteria.map((x) => CqmDataElement.parse(x));
    }

    return newInstance;
  }

  public toJSON(): any {
    const result: any = {};

    result.cms_id = this.cms_id;
    result.title = this.title;
    result.description = this.description;
    result.set_id = this.set_id;
    result.calculation_method = this.calculation_method;
    result.calculate_sdes = this.calculate_sdes;

    if (this.fhir_measure) {
      result.fhir_measure = this.fhir_measure.toJSON();
    }

    if (this.libraries) {
      result.libraries = this.libraries.map((x) => x.toJSON());
    }

    if (this.value_sets) {
      result.value_sets = this.value_sets.map((x) => x.toJSON());
    }

    if (this.package) {
      result.package = this.package.toJSON();
    }

    if (this.cql_libraries) {
      result.cql_libraries = this.cql_libraries.map((x) => x.toJSON());
    }

    result.main_cql_library = this.cql_libraries;

    if (this.source_data_criteria) {
      result.source_data_criteria = this.source_data_criteria.map((x) => x.toJSON());
    }

    return result;
  }
}
