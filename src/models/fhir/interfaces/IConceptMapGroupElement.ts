/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IConceptMapGroupElementTarget,
  IElement,
  IPrimitiveCode,
  IPrimitiveString,
} from "../internal";

export interface IConceptMapGroupElement extends IBackboneElement {
  code?: IPrimitiveCode;
  _code?: IElement;

  display?: IPrimitiveString;
  _display?: IElement;

  target?: Array<IConceptMapGroupElementTarget>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
