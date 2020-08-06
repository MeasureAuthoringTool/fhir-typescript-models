/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IEventCapabilityMode,
  IPrimitiveCanonical,
} from "../internal";

export interface ICapabilityStatementMessagingSupportedMessage extends IBackboneElement {
  mode?: IEventCapabilityMode;
  _mode?: IElement;

  definition?: IPrimitiveCanonical;
  _definition?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
