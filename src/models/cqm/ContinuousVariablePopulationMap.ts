import {StatementReference} from "./StatementReference";
import {PopulationMap} from "./PopulationMap";

/**
 * The population map for a continuous variable population set.
 */
export class ContinuousVariablePopulationMap extends PopulationMap {
  public IPP?: StatementReference;
  public MSRPOPL?: StatementReference;
  public MSRPOPLEX?: StatementReference;
}
