/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAttachment,
  IClaimResponseAddItem,
  IClaimResponseError,
  IClaimResponseInsurance,
  IClaimResponseItem,
  IClaimResponseItemAdjudication,
  IClaimResponsePayment,
  IClaimResponseProcessNote,
  IClaimResponseStatus,
  IClaimResponseTotal,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveString,
  IReference,
  IRemittanceOutcome,
  IUse,
} from "../internal";

export interface IClaimResponse extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IClaimResponseStatus;
  _status?: IElement;

  type?: ICodeableConcept;

  subType?: ICodeableConcept;

  use?: IUse;
  _use?: IElement;

  patient?: IReference;

  created?: IPrimitiveDateTime;
  _created?: IElement;

  insurer?: IReference;

  requestor?: IReference;

  request?: IReference;

  outcome?: IRemittanceOutcome;
  _outcome?: IElement;

  disposition?: IPrimitiveString;
  _disposition?: IElement;

  preAuthRef?: IPrimitiveString;
  _preAuthRef?: IElement;

  preAuthPeriod?: IPeriod;

  payeeType?: ICodeableConcept;

  item?: Array<IClaimResponseItem>;

  addItem?: Array<IClaimResponseAddItem>;

  adjudication?: Array<IClaimResponseItemAdjudication>;

  total?: Array<IClaimResponseTotal>;

  payment?: IClaimResponsePayment;

  fundsReserve?: ICodeableConcept;

  formCode?: ICodeableConcept;

  form?: IAttachment;

  processNote?: Array<IClaimResponseProcessNote>;

  communicationRequest?: Array<IReference>;

  insurance?: Array<IClaimResponseInsurance>;

  error?: Array<IClaimResponseError>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
