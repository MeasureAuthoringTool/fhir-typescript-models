/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
  IQuantity,
  IRange,
  ISubstanceAmountReferenceRange,
} from "../internal";

export interface ISubstanceAmount extends IBackboneElement {
  amountQuantity?: IQuantity;
  
  amountRange?: IRange;
  
  amountString?: IPrimitiveString;
  _amountString?: IElement;

  amountType?: ICodeableConcept;

  amountText?: IPrimitiveString;
  _amountText?: IElement;

  referenceRange?: ISubstanceAmountReferenceRange;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
