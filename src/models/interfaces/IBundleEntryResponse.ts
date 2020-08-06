/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  AnyResource,
  IBackboneElement,
  IElement,
  IPrimitiveInstant,
  IPrimitiveString,
  IPrimitiveUri,
} from "../internal";

export interface IBundleEntryResponse extends IBackboneElement {
  status?: IPrimitiveString;
  _status?: IElement;

  location?: IPrimitiveUri;
  _location?: IElement;

  etag?: IPrimitiveString;
  _etag?: IElement;

  lastModified?: IPrimitiveInstant;
  _lastModified?: IElement;

  outcome?: AnyResource;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
