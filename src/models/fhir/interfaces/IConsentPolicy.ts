/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveUri,
} from "../internal";

export interface IConsentPolicy extends IBackboneElement {
  authority?: IPrimitiveUri;
  _authority?: IElement;

  uri?: IPrimitiveUri;
  _uri?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
