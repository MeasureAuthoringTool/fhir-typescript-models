/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IClaimAccident,
  IClaimCareTeam,
  IClaimDiagnosis,
  IClaimInsurance,
  IClaimItem,
  IClaimPayee,
  IClaimProcedure,
  IClaimRelated,
  IClaimStatus,
  IClaimSupportingInfo,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IMoney,
  IPeriod,
  IPrimitiveDateTime,
  IReference,
  IUse,
} from "../internal";

export interface IClaim extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IClaimStatus;
  _status?: IElement;

  type?: ICodeableConcept;

  subType?: ICodeableConcept;

  use?: IUse;
  _use?: IElement;

  patient?: IReference;

  billablePeriod?: IPeriod;

  created?: IPrimitiveDateTime;
  _created?: IElement;

  enterer?: IReference;

  insurer?: IReference;

  provider?: IReference;

  priority?: ICodeableConcept;

  fundsReserve?: ICodeableConcept;

  related?: Array<IClaimRelated>;

  prescription?: IReference;

  originalPrescription?: IReference;

  payee?: IClaimPayee;

  referral?: IReference;

  facility?: IReference;

  careTeam?: Array<IClaimCareTeam>;

  supportingInfo?: Array<IClaimSupportingInfo>;

  diagnosis?: Array<IClaimDiagnosis>;

  procedure?: Array<IClaimProcedure>;

  insurance?: Array<IClaimInsurance>;

  accident?: IClaimAccident;

  item?: Array<IClaimItem>;

  total?: IMoney;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
