/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAuditEventAgentNetworkType,
  IBackboneElement,
  IElement,
  IPrimitiveString,
} from "../internal";

export interface IAuditEventAgentNetwork extends IBackboneElement {
  address?: IPrimitiveString;
  _address?: IElement;

  type?: IAuditEventAgentNetworkType;
  _type?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
