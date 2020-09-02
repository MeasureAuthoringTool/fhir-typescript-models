import {
  ILibrary,
  IValueSet,
  Library,
  Measure,
  ValueSet,
} from "../fhir/internal";
import { CqmLogicLibrary } from "./CqmLogicLibrary";
import { DataElement } from "./DataElement";
import { PopulationSet } from "./PopulationSet";

export class CqmMeasure {
  // MongoDB ID
  public id?: string;
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
  // tslint:disable-next-line:variable-name
  public cql_libraries?: Array<CqmLogicLibrary>;
  // tslint:disable-next-line:variable-name
  public main_cql_library?: string;
  // tslint:disable-next-line:variable-name
  public source_data_criteria?: Array<DataElement>;
  // tslint:disable-next-line:variable-name
  public population_sets?: Array<PopulationSet>;
  // tslint:disable-next-line:variable-name
  public measure_period?: any;
  // mongoid created timestamp
  // tslint:disable-next-line:variable-name
  public created_at?: string;
  // mongoid updated timestamp
  // tslint:disable-next-line:variable-name
  public updated_at?: string;

  public static parse(
    json: any,
    providedInstance: CqmMeasure = new CqmMeasure()
  ): CqmMeasure {
    const newInstance: CqmMeasure = providedInstance;

    if (json.id) {
      newInstance.id = json.id;
    }
    if (json.cms_id) {
      newInstance.cms_id = json.cms_id;
    }
    if (json.title) {
      newInstance.title = json.title;
    }
    if (json.description) {
      newInstance.description = json.description;
    }
    if (json.set_id) {
      newInstance.set_id = json.set_id;
    }
    if (json.calculation_method) {
      newInstance.calculation_method = json.calculation_method;
    }
    if (json.calculate_sdes != null) {
      newInstance.calculate_sdes = json.calculate_sdes;
    }
    if (json.fhir_measure) {
      newInstance.fhir_measure = Measure.parse(json.fhir_measure);
    }
    if (json.libraries) {
      newInstance.libraries = json.libraries.map((x: ILibrary) =>
        Library.parse(x)
      );
    }
    if (json.value_sets) {
      newInstance.value_sets = json.value_sets.map((x: IValueSet) =>
        ValueSet.parse(x)
      );
    }
    if (json.cql_libraries) {
      newInstance.cql_libraries = json.cql_libraries.map((x: any) =>
        CqmLogicLibrary.parse(x)
      );
    }
    if (json.main_cql_library) {
      newInstance.main_cql_library = json.main_cql_library;
    }
    if (json.measure_period) {
      newInstance.measure_period = json.measure_period;
    }
    if (json.created_at) {
      newInstance.created_at = json.created_at;
    }
    if (json.updated_at) {
      newInstance.updated_at = json.updated_at;
    }
    if (json.source_data_criteria) {
      newInstance.source_data_criteria = json.source_data_criteria.map(
        (x: any) => DataElement.parse(x)
      );
    }
    if (json.population_sets) {
      newInstance.population_sets = json.population_sets.map((x: any) =>
        PopulationSet.parse(x)
      );
    }

    return newInstance;
  }

  public toJSON(): any {
    const result: any = {};

    if (this.id) {
      result.id = this.id;
    }
    if (this.cms_id) {
      result.cms_id = this.cms_id;
    }
    if (this.cms_id) {
      result.cms_id = this.cms_id;
    }
    if (this.title) {
      result.title = this.title;
    }
    if (this.description) {
      result.description = this.description;
    }
    if (this.set_id) {
      result.set_id = this.set_id;
    }
    if (this.calculation_method) {
      result.calculation_method = this.calculation_method;
    }
    if (this.calculate_sdes != null) {
      result.calculate_sdes = this.calculate_sdes;
    }
    if (this.fhir_measure) {
      result.fhir_measure = this.fhir_measure.toJSON();
    }
    if (this.libraries) {
      result.libraries = this.libraries.map((x) => x.toJSON());
    }
    if (this.value_sets) {
      result.value_sets = this.value_sets.map((x) => x.toJSON());
    }
    if (this.cql_libraries) {
      result.cql_libraries = this.cql_libraries.map((x) => x.toJSON());
    }
    if (this.main_cql_library) {
      result.main_cql_library = this.main_cql_library;
    }
    if (this.source_data_criteria) {
      result.source_data_criteria = this.source_data_criteria.map((x) =>
        x.toJSON()
      );
    }
    if (this.population_sets) {
      result.population_sets = this.population_sets.map((x) => x.toJSON());
    }
    if (this.measure_period) {
      result.measure_period = this.measure_period;
    }
    if (this.created_at) {
      result.created_at = this.created_at;
    }
    if (this.updated_at) {
      result.updated_at = this.updated_at;
    }

    return result;
  }

  get allPopulationSetsAndStratifications(): Array<PopulationSet> {
    return (
      this.population_sets?.concat(this.stratificationsAsPopulationSets) || []
    );
  }

  get stratificationsAsPopulationSets(): Array<PopulationSet> {
    const stratificationsAsPopulationSets: Array<PopulationSet> = [];
    this.population_sets?.forEach((populationSet) => {
      if (populationSet.stratifications) {
        populationSet.stratifications.forEach((stratification) => {
          const clonedSet = PopulationSet.parse(populationSet.toJSON());
          clonedSet.population_set_id = stratification.stratification_id;
          if (clonedSet.populations) {
            clonedSet.populations.STRAT = stratification.statement;
          }
          stratificationsAsPopulationSets.push(clonedSet);
        });
      }
    });
    return stratificationsAsPopulationSets;
  }

  public clone(): CqmMeasure {
    return CqmMeasure.parse(this.toJSON());
  }

}
