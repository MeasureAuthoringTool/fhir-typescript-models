/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IDomainResource,
  IElement,
  IEnrollmentResponseStatus,
  IIdentifier,
  IPrimitiveDateTime,
  IPrimitiveString,
  IReference,
  IRemittanceOutcome,
} from "../internal";

export interface IEnrollmentResponse extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IEnrollmentResponseStatus;
  _status?: IElement;

  request?: IReference;

  outcome?: IRemittanceOutcome;
  _outcome?: IElement;

  disposition?: IPrimitiveString;
  _disposition?: IElement;

  created?: IPrimitiveDateTime;
  _created?: IElement;

  organization?: IReference;

  requestProvider?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
