/**
 * Representation of a population set (aka. PopulationCriteria)
 */
/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CqmObservation,
  IPopulationSet,
  PopulationMap,
  lookupPopulationMapSubclass,
  StatementReference,
  Stratification,
  IStatementReference,
  ICqmObservation,
  IStratification,
} from "../index";

export class PopulationSet {
  public populations?: PopulationMap;

  public stratifications?: Array<Stratification>;

  public supplemental_data_elements?: Array<StatementReference>;

  public observations?: Array<CqmObservation>;

  public title?: string;

  public population_set_id?: string;

  public static parse(
    json: IPopulationSet,
    providedInstance: PopulationSet = new PopulationSet(),
  ): PopulationSet {
    const newInstance: PopulationSet = providedInstance;
    if (json.populations && json.populations.resource_type) {
      // Circular dependency workaround: invoke a lookup method directly,
      // than indirectly through PopulationSet::parse
      const subclass = lookupPopulationMapSubclass(
        json.populations.resource_type,
      );
      if (subclass) {
        newInstance.populations = subclass.parse(json.populations);
      }
    }
    if (json.stratifications) {
      newInstance.stratifications = json.stratifications.map((x: IStratification) =>
        Stratification.parse(x),
      );
    }
    if (json.supplemental_data_elements) {
      newInstance.supplemental_data_elements = json.supplemental_data_elements.map(
        (x: IStatementReference) => StatementReference.parse(x),
      );
    }
    if (json.observations) {
      newInstance.observations = json.observations.map((x: ICqmObservation) =>
        CqmObservation.parse(x),
      );
    }
    if (json.title) {
      newInstance.title = json.title;
    }
    if (json.population_set_id) {
      newInstance.population_set_id = json.population_set_id;
    }
    return newInstance;
  }

  toJSON(): IPopulationSet {
    const result: IPopulationSet = {};
    if (this.populations) {
      result.populations = this.populations.toJSON();
    }
    if (this.stratifications) {
      result.stratifications = this.stratifications.map((x) => x.toJSON());
    }
    if (this.supplemental_data_elements) {
      result.supplemental_data_elements = this.supplemental_data_elements.map(
        (x) => x.toJSON(),
      );
    }
    if (this.observations) {
      result.observations = this.observations.map((x) => x.toJSON());
    }
    if (this.title) {
      result.title = this.title;
    }
    if (this.population_set_id) {
      result.population_set_id = this.population_set_id;
    }

    return result;
  }

  public clone(): PopulationSet {
    return PopulationSet.parse(this.toJSON());
  }

}

/* eslint-enable import/prefer-default-export, import/no-cycle */
