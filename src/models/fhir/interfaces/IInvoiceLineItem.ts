/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IInvoiceLineItemPriceComponent,
  IPrimitivePositiveInt,
  IReference,
} from "../internal";

export interface IInvoiceLineItem extends IBackboneElement {
  sequence?: IPrimitivePositiveInt;
  _sequence?: IElement;

  chargeItemReference?: IReference;
  
  chargeItemCodeableConcept?: ICodeableConcept;

  priceComponent?: Array<IInvoiceLineItemPriceComponent>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
