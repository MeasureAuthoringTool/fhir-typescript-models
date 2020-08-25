/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICoding,
  IElement,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IAuditEventSource extends IBackboneElement {
  site?: IPrimitiveString;
  _site?: IElement;

  observer?: IReference;

  type?: Array<ICoding>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
