/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveString,
  IPrimitiveUrl,
  IReference,
} from "../internal";

export interface IMessageHeaderDestination extends IBackboneElement {
  name?: IPrimitiveString;
  _name?: IElement;

  target?: IReference;

  endpoint?: IPrimitiveUrl;
  _endpoint?: IElement;

  receiver?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
