/* eslint-disable @typescript-eslint/naming-convention, import/no-cycle */
import { IStatementReference, IPopulationMap } from "../index";

export interface IContinuousVariablePopulationMap extends IPopulationMap {
  IPP?: IStatementReference;

  MSRPOPL?: IStatementReference;

  MSRPOPLEX?: IStatementReference;
}

/* eslint-enable @typescript-eslint/naming-convention, import/no-cycle */
