/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  INamingSystemIdentifierType,
  IPeriod,
  IPrimitiveBoolean,
  IPrimitiveString,
} from "../internal";

export interface INamingSystemUniqueId extends IBackboneElement {
  type?: INamingSystemIdentifierType;
  _type?: IElement;

  value?: IPrimitiveString;
  _value?: IElement;

  preferred?: IPrimitiveBoolean;
  _preferred?: IElement;

  comment?: IPrimitiveString;
  _comment?: IElement;

  period?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
