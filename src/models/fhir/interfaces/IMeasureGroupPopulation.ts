/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IExpression,
  IPrimitiveString,
} from "../internal";

export interface IMeasureGroupPopulation extends IBackboneElement {
  code?: ICodeableConcept;

  description?: IPrimitiveString;
  _description?: IElement;

  criteria?: IExpression;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
