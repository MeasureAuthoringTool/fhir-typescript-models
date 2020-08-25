/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAddressType,
  IAddressUse,
  IElement,
  IPeriod,
  IPrimitiveString,
} from "../internal";

export interface IAddress extends IElement {
  use?: IAddressUse;
  _use?: IElement;

  type?: IAddressType;
  _type?: IElement;

  text?: IPrimitiveString;
  _text?: IElement;

  line?: Array<IPrimitiveString>;
  _line?: Array<IElement | null>;

  city?: IPrimitiveString;
  _city?: IElement;

  district?: IPrimitiveString;
  _district?: IElement;

  state?: IPrimitiveString;
  _state?: IElement;

  postalCode?: IPrimitiveString;
  _postalCode?: IElement;

  country?: IPrimitiveString;
  _country?: IElement;

  period?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
