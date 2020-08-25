/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IPrimitiveCode,
  IPrimitiveDecimal,
  IPrimitiveString,
  IPrimitiveUri,
  IQuantity,
  IQuantityComparator,
} from "../internal";

export interface IMoneyQuantity extends IQuantity {
  value?: IPrimitiveDecimal;
  _value?: IElement;

  comparator?: IQuantityComparator;
  _comparator?: IElement;

  unit?: IPrimitiveString;
  _unit?: IElement;

  system?: IPrimitiveUri;
  _system?: IElement;

  code?: IPrimitiveCode;
  _code?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
