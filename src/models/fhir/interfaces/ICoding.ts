/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IPrimitiveBoolean,
  IPrimitiveCode,
  IPrimitiveString,
  IPrimitiveUri,
} from "../internal";

export interface ICoding extends IElement {
  system?: IPrimitiveUri;
  _system?: IElement;

  version?: IPrimitiveString;
  _version?: IElement;

  code?: IPrimitiveCode;
  _code?: IElement;

  display?: IPrimitiveString;
  _display?: IElement;

  userSelected?: IPrimitiveBoolean;
  _userSelected?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
