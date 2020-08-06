/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IIdentifier,
  IPrimitiveString,
  IPrimitiveUri,
} from "../internal";

export interface IReference extends IElement {
  reference?: IPrimitiveString;
  _reference?: IElement;

  type?: IPrimitiveUri;
  _type?: IElement;

  identifier?: IIdentifier;

  display?: IPrimitiveString;
  _display?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
