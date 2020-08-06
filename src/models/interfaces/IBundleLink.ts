/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveString,
  IPrimitiveUri,
} from "../internal";

export interface IBundleLink extends IBackboneElement {
  relation?: IPrimitiveString;
  _relation?: IElement;

  url?: IPrimitiveUri;
  _url?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
