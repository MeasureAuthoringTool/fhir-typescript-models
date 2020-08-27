/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IInvoiceLineItem,
  IInvoiceLineItemPriceComponent,
  IInvoiceParticipant,
  IInvoiceStatus,
  IMoney,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IInvoice extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IInvoiceStatus;
  _status?: IElement;

  cancelledReason?: IPrimitiveString;
  _cancelledReason?: IElement;

  type?: ICodeableConcept;

  subject?: IReference;

  recipient?: IReference;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  participant?: Array<IInvoiceParticipant>;

  issuer?: IReference;

  account?: IReference;

  lineItem?: Array<IInvoiceLineItem>;

  totalPriceComponent?: Array<IInvoiceLineItemPriceComponent>;

  totalNet?: IMoney;

  totalGross?: IMoney;

  paymentTerms?: IPrimitiveMarkdown;
  _paymentTerms?: IElement;

  note?: Array<IAnnotation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
