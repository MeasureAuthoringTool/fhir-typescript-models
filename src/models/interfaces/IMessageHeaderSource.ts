/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IContactPoint,
  IElement,
  IPrimitiveString,
  IPrimitiveUrl,
} from "../internal";

export interface IMessageHeaderSource extends IBackboneElement {
  name?: IPrimitiveString;
  _name?: IElement;

  software?: IPrimitiveString;
  _software?: IElement;

  version?: IPrimitiveString;
  _version?: IElement;

  contact?: IContactPoint;

  endpoint?: IPrimitiveUrl;
  _endpoint?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
