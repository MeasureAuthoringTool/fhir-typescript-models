/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IContactPoint,
  IDomainResource,
  IElement,
  IPrimitiveInstant,
  IPrimitiveString,
  ISubscriptionChannel,
  ISubscriptionStatus,
} from "../internal";

export interface ISubscription extends IDomainResource {
  status?: ISubscriptionStatus;
  _status?: IElement;

  contact?: Array<IContactPoint>;

  end?: IPrimitiveInstant;
  _end?: IElement;

  reason?: IPrimitiveString;
  _reason?: IElement;

  criteria?: IPrimitiveString;
  _criteria?: IElement;

  error?: IPrimitiveString;
  _error?: IElement;

  channel?: ISubscriptionChannel;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
