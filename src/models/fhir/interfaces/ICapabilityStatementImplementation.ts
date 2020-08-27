/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveString,
  IPrimitiveUrl,
  IReference,
} from "../internal";

export interface ICapabilityStatementImplementation extends IBackboneElement {
  description?: IPrimitiveString;
  _description?: IElement;

  url?: IPrimitiveUrl;
  _url?: IElement;

  custodian?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
