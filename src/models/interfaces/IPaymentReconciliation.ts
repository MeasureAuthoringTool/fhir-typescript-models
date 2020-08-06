/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IMoney,
  IPaymentReconciliationDetail,
  IPaymentReconciliationProcessNote,
  IPaymentReconciliationStatus,
  IPeriod,
  IPrimitiveDate,
  IPrimitiveDateTime,
  IPrimitiveString,
  IReference,
  IRemittanceOutcome,
} from "../internal";

export interface IPaymentReconciliation extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IPaymentReconciliationStatus;
  _status?: IElement;

  period?: IPeriod;

  created?: IPrimitiveDateTime;
  _created?: IElement;

  paymentIssuer?: IReference;

  request?: IReference;

  requestor?: IReference;

  outcome?: IRemittanceOutcome;
  _outcome?: IElement;

  disposition?: IPrimitiveString;
  _disposition?: IElement;

  paymentDate?: IPrimitiveDate;
  _paymentDate?: IElement;

  paymentAmount?: IMoney;

  paymentIdentifier?: IIdentifier;

  detail?: Array<IPaymentReconciliationDetail>;

  formCode?: ICodeableConcept;

  processNote?: Array<IPaymentReconciliationProcessNote>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
