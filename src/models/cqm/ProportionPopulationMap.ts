import {PopulationMap} from "./PopulationMap";
import {StatementReference} from "./StatementReference";

/**
 * The population map for a porportion population set.
 */
export class ProportionPopulationMap extends PopulationMap {
  // tslint:disable-next-line:variable-name
  public IPP?: StatementReference;
  // tslint:disable-next-line:variable-name
  public DENOM?: StatementReference;
  // tslint:disable-next-line:variable-name
  public NUMER?: StatementReference;
  // tslint:disable-next-line:variable-name
  public NUMEX?: StatementReference;
  // tslint:disable-next-line:variable-name
  public DENEX?: StatementReference;
  // tslint:disable-next-line:variable-name
  public DENEXCEP?: StatementReference;
}
