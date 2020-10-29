/* eslint-disable @typescript-eslint/naming-convention, import/no-cycle */
import { IStatementReference, IPopulationMap } from "../index";

export interface ICohortPopulationMap extends IPopulationMap {
  IPP?: IStatementReference;
}

/* eslint-enable @typescript-eslint/naming-convention, import/no-cycle */
