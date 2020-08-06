/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAuditEventEntityDetail,
  IBackboneElement,
  ICoding,
  IElement,
  IPrimitiveBase64Binary,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IAuditEventEntity extends IBackboneElement {
  what?: IReference;

  type?: ICoding;

  role?: ICoding;

  lifecycle?: ICoding;

  securityLabel?: Array<ICoding>;

  name?: IPrimitiveString;
  _name?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  query?: IPrimitiveBase64Binary;
  _query?: IElement;

  detail?: Array<IAuditEventEntityDetail>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
