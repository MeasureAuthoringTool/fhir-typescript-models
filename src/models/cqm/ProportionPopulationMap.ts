import {PopulationMap} from "./PopulationMap";
import {StatementReference} from "./StatementReference";

/**
 * The population map for a porportion population set.
 */
export class ProportionPopulationMap extends PopulationMap {
  public IPP?: StatementReference;
  public DENOM?: StatementReference;
  public NUMER?: StatementReference;
  public NUMEX?: StatementReference;
  public DENEX?: StatementReference;
  public DENEXCEP?: StatementReference;
}
