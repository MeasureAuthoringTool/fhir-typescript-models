/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAttachment,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IExplanationOfBenefitAccident,
  IExplanationOfBenefitAddItem,
  IExplanationOfBenefitBenefitBalance,
  IExplanationOfBenefitCareTeam,
  IExplanationOfBenefitDiagnosis,
  IExplanationOfBenefitInsurance,
  IExplanationOfBenefitItem,
  IExplanationOfBenefitItemAdjudication,
  IExplanationOfBenefitPayee,
  IExplanationOfBenefitPayment,
  IExplanationOfBenefitProcedure,
  IExplanationOfBenefitProcessNote,
  IExplanationOfBenefitRelated,
  IExplanationOfBenefitStatus,
  IExplanationOfBenefitSupportingInfo,
  IExplanationOfBenefitTotal,
  IIdentifier,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitivePositiveInt,
  IPrimitiveString,
  IReference,
  IRemittanceOutcome,
  IUse,
} from "../internal";

export interface IExplanationOfBenefit extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IExplanationOfBenefitStatus;
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

  fundsReserveRequested?: ICodeableConcept;

  fundsReserve?: ICodeableConcept;

  related?: Array<IExplanationOfBenefitRelated>;

  prescription?: IReference;

  originalPrescription?: IReference;

  payee?: IExplanationOfBenefitPayee;

  referral?: IReference;

  facility?: IReference;

  claim?: IReference;

  claimResponse?: IReference;

  outcome?: IRemittanceOutcome;
  _outcome?: IElement;

  disposition?: IPrimitiveString;
  _disposition?: IElement;

  preAuthRef?: Array<IPrimitiveString>;
  _preAuthRef?: Array<IElement | null>;

  preAuthRefPeriod?: Array<IPeriod>;

  careTeam?: Array<IExplanationOfBenefitCareTeam>;

  supportingInfo?: Array<IExplanationOfBenefitSupportingInfo>;

  diagnosis?: Array<IExplanationOfBenefitDiagnosis>;

  procedure?: Array<IExplanationOfBenefitProcedure>;

  precedence?: IPrimitivePositiveInt;
  _precedence?: IElement;

  insurance?: Array<IExplanationOfBenefitInsurance>;

  accident?: IExplanationOfBenefitAccident;

  item?: Array<IExplanationOfBenefitItem>;

  addItem?: Array<IExplanationOfBenefitAddItem>;

  adjudication?: Array<IExplanationOfBenefitItemAdjudication>;

  total?: Array<IExplanationOfBenefitTotal>;

  payment?: IExplanationOfBenefitPayment;

  formCode?: ICodeableConcept;

  form?: IAttachment;

  processNote?: Array<IExplanationOfBenefitProcessNote>;

  benefitPeriod?: IPeriod;

  benefitBalance?: Array<IExplanationOfBenefitBenefitBalance>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
