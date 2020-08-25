/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveString,
  IPrimitiveUrl,
} from "../internal";

export interface ITerminologyCapabilitiesImplementation extends IBackboneElement {
  description?: IPrimitiveString;
  _description?: IElement;

  url?: IPrimitiveUrl;
  _url?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
