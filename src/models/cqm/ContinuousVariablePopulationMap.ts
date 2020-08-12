import {PopulationMap} from "./PopulationMap";
import {StatementReference} from "./StatementReference";

/**
 * The population map for a continuous variable population set.
 */
export class ContinuousVariablePopulationMap extends PopulationMap {
  public IPP?: StatementReference;
  public MSRPOPL?: StatementReference;
  public MSRPOPLEX?: StatementReference;
}
