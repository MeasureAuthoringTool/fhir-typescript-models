/**
 * Representation of a population set (aka. PopulationCriteria)
 */
import {Observation} from "./Observation";
import {PopulationMap} from "./PopulationMap";
import {StatementReference} from "./StatementReference";
import {Stratification} from "./Stratification";

export class PopulationSet {
  public populations?: PopulationMap;
  public stratifications?: Array<Stratification>;
  // tslint:disable-next-line:variable-name
  public supplemental_data_elements?: Array<StatementReference>;
  public observations?: Array<Observation>;

  public title?: string;
  // tslint:disable-next-line:variable-name
  public population_set_id?: string;
}
