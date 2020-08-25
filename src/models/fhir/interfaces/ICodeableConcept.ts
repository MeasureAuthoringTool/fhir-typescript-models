/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICoding,
  IElement,
  IPrimitiveString,
} from "../internal";

export interface ICodeableConcept extends IElement {
  coding?: Array<ICoding>;

  text?: IPrimitiveString;
  _text?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
