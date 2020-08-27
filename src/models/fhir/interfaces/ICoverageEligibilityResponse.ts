/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  ICoverageEligibilityResponseError,
  ICoverageEligibilityResponseInsurance,
  IDomainResource,
  IElement,
  IEligibilityResponsePurpose,
  IEligibilityResponseStatus,
  IIdentifier,
  IPeriod,
  IPrimitiveDate,
  IPrimitiveDateTime,
  IPrimitiveString,
  IReference,
  IRemittanceOutcome,
} from "../internal";

export interface ICoverageEligibilityResponse extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IEligibilityResponseStatus;
  _status?: IElement;

  purpose?: Array<IEligibilityResponsePurpose>;
  _purpose?: Array<IElement | null>;

  patient?: IReference;

  servicedDate?: IPrimitiveDate;
  _servicedDate?: IElement;
  
  servicedPeriod?: IPeriod;

  created?: IPrimitiveDateTime;
  _created?: IElement;

  requestor?: IReference;

  request?: IReference;

  outcome?: IRemittanceOutcome;
  _outcome?: IElement;

  disposition?: IPrimitiveString;
  _disposition?: IElement;

  insurer?: IReference;

  insurance?: Array<ICoverageEligibilityResponseInsurance>;

  preAuthRef?: IPrimitiveString;
  _preAuthRef?: IElement;

  form?: ICodeableConcept;

  error?: Array<ICoverageEligibilityResponseError>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
