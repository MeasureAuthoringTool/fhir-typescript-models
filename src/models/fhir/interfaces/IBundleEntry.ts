/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  AnyResource,
  IBackboneElement,
  IBundleEntryRequest,
  IBundleEntryResponse,
  IBundleEntrySearch,
  IBundleLink,
  IElement,
  IPrimitiveUri,
} from "../internal";

export interface IBundleEntry extends IBackboneElement {
  link?: Array<IBundleLink>;

  fullUrl?: IPrimitiveUri;
  _fullUrl?: IElement;

  resource?: AnyResource;

  search?: IBundleEntrySearch;

  request?: IBundleEntryRequest;

  response?: IBundleEntryResponse;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
