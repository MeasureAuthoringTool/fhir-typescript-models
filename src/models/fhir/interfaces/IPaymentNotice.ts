/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IMoney,
  IPaymentNoticeStatus,
  IPrimitiveDate,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface IPaymentNotice extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IPaymentNoticeStatus;
  _status?: IElement;

  request?: IReference;

  response?: IReference;

  created?: IPrimitiveDateTime;
  _created?: IElement;

  provider?: IReference;

  payment?: IReference;

  paymentDate?: IPrimitiveDate;
  _paymentDate?: IElement;

  payee?: IReference;

  recipient?: IReference;

  amount?: IMoney;

  paymentStatus?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
