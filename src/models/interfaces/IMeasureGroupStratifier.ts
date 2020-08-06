/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IExpression,
  IMeasureGroupStratifierComponent,
  IPrimitiveString,
} from "../internal";

export interface IMeasureGroupStratifier extends IBackboneElement {
  code?: ICodeableConcept;

  description?: IPrimitiveString;
  _description?: IElement;

  criteria?: IExpression;

  component?: Array<IMeasureGroupStratifierComponent>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
