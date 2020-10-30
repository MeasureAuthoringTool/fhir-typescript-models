/* eslint-disable @typescript-eslint/naming-convention, import/no-cycle */
import {
  IPopulationMap,
  IStatementReference,
} from "../index";

export interface IProportionPopulationMap extends IPopulationMap {
  IPP?: IStatementReference;

  DENOM?: IStatementReference;

  NUMER?: IStatementReference;

  NUMEX?: IStatementReference;

  DENEX?: IStatementReference;

  DENEXCEP?: IStatementReference;
}

/* eslint-enable @typescript-eslint/naming-convention, import/no-cycle */
