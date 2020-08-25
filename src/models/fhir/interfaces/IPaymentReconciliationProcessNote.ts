/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  INoteType,
  IPrimitiveString,
} from "../internal";

export interface IPaymentReconciliationProcessNote extends IBackboneElement {
  type?: INoteType;
  _type?: IElement;

  text?: IPrimitiveString;
  _text?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
