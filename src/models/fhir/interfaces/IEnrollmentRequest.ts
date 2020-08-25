/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IDomainResource,
  IElement,
  IEnrollmentRequestStatus,
  IIdentifier,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface IEnrollmentRequest extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IEnrollmentRequestStatus;
  _status?: IElement;

  created?: IPrimitiveDateTime;
  _created?: IElement;

  insurer?: IReference;

  provider?: IReference;

  candidate?: IReference;

  coverage?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
