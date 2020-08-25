/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IMeasureGroupPopulation,
  IMeasureGroupStratifier,
  IPrimitiveString,
} from "../internal";

export interface IMeasureGroup extends IBackboneElement {
  code?: ICodeableConcept;

  description?: IPrimitiveString;
  _description?: IElement;

  population?: Array<IMeasureGroupPopulation>;

  stratifier?: Array<IMeasureGroupStratifier>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
