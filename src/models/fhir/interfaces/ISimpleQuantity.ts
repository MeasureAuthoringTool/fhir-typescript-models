/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IPrimitiveCode,
  IPrimitiveDecimal,
  IPrimitiveString,
  IPrimitiveUri,
  IQuantity,
} from "../internal";

export interface ISimpleQuantity extends IQuantity {
  value?: IPrimitiveDecimal;
  _value?: IElement;

  unit?: IPrimitiveString;
  _unit?: IElement;

  system?: IPrimitiveUri;
  _system?: IElement;

  code?: IPrimitiveCode;
  _code?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
