/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IMimeType,
  IPrimitiveString,
  IPrimitiveUrl,
  ISubscriptionChannelType,
} from "../internal";

export interface ISubscriptionChannel extends IBackboneElement {
  type?: ISubscriptionChannelType;
  _type?: IElement;

  endpoint?: IPrimitiveUrl;
  _endpoint?: IElement;

  payload?: IMimeType;
  _payload?: IElement;

  header?: Array<IPrimitiveString>;
  _header?: Array<IElement | null>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
