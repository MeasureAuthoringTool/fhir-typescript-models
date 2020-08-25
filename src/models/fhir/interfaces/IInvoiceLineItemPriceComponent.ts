/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IInvoicePriceComponentType,
  IMoney,
  IPrimitiveDecimal,
} from "../internal";

export interface IInvoiceLineItemPriceComponent extends IBackboneElement {
  type?: IInvoicePriceComponentType;
  _type?: IElement;

  code?: ICodeableConcept;

  factor?: IPrimitiveDecimal;
  _factor?: IElement;

  amount?: IMoney;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
