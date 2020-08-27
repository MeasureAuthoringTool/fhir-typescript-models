/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICoding,
  IElement,
  IPrimitiveUrl,
} from "../internal";

export interface ICapabilityStatementMessagingEndpoint extends IBackboneElement {
  protocol?: ICoding;

  address?: IPrimitiveUrl;
  _address?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
