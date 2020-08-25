/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IHTTPVerb,
  IPrimitiveInstant,
  IPrimitiveString,
  IPrimitiveUri,
} from "../internal";

export interface IBundleEntryRequest extends IBackboneElement {
  method?: IHTTPVerb;
  _method?: IElement;

  url?: IPrimitiveUri;
  _url?: IElement;

  ifNoneMatch?: IPrimitiveString;
  _ifNoneMatch?: IElement;

  ifModifiedSince?: IPrimitiveInstant;
  _ifModifiedSince?: IElement;

  ifMatch?: IPrimitiveString;
  _ifMatch?: IElement;

  ifNoneExist?: IPrimitiveString;
  _ifNoneExist?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
