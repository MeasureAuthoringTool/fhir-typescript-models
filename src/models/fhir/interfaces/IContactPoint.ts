/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IContactPointSystem,
  IContactPointUse,
  IElement,
  IPeriod,
  IPrimitivePositiveInt,
  IPrimitiveString,
} from "../internal";

export interface IContactPoint extends IElement {
  system?: IContactPointSystem;
  _system?: IElement;

  value?: IPrimitiveString;
  _value?: IElement;

  use?: IContactPointUse;
  _use?: IElement;

  rank?: IPrimitivePositiveInt;
  _rank?: IElement;

  period?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
