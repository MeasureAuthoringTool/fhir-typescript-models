/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICurrencyCode,
  IElement,
  IPrimitiveDecimal,
} from "../internal";

export interface IMoney extends IElement {
  value?: IPrimitiveDecimal;
  _value?: IElement;

  currency?: ICurrencyCode;
  _currency?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
