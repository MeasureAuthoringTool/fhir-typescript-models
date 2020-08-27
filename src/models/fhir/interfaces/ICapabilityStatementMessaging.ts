/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICapabilityStatementMessagingEndpoint,
  ICapabilityStatementMessagingSupportedMessage,
  IElement,
  IPrimitiveMarkdown,
  IPrimitiveUnsignedInt,
} from "../internal";

export interface ICapabilityStatementMessaging extends IBackboneElement {
  endpoint?: Array<ICapabilityStatementMessagingEndpoint>;

  reliableCache?: IPrimitiveUnsignedInt;
  _reliableCache?: IElement;

  documentation?: IPrimitiveMarkdown;
  _documentation?: IElement;

  supportedMessage?: Array<ICapabilityStatementMessagingSupportedMessage>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
