/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  ICoverageEligibilityRequestInsurance,
  ICoverageEligibilityRequestItem,
  ICoverageEligibilityRequestSupportingInfo,
  IDomainResource,
  IElement,
  IEligibilityRequestPurpose,
  IEligibilityRequestStatus,
  IIdentifier,
  IPeriod,
  IPrimitiveDate,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface ICoverageEligibilityRequest extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IEligibilityRequestStatus;
  _status?: IElement;

  priority?: ICodeableConcept;

  purpose?: Array<IEligibilityRequestPurpose>;
  _purpose?: Array<IElement | null>;

  patient?: IReference;

  servicedDate?: IPrimitiveDate;
  _servicedDate?: IElement;
  
  servicedPeriod?: IPeriod;

  created?: IPrimitiveDateTime;
  _created?: IElement;

  enterer?: IReference;

  provider?: IReference;

  insurer?: IReference;

  facility?: IReference;

  supportingInfo?: Array<ICoverageEligibilityRequestSupportingInfo>;

  insurance?: Array<ICoverageEligibilityRequestInsurance>;

  item?: Array<ICoverageEligibilityRequestItem>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
