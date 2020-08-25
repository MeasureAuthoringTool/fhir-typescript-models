/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
  IQuantity,
  IReference,
} from "../internal";

export interface ISubstanceSpecificationProperty extends IBackboneElement {
  category?: ICodeableConcept;

  code?: ICodeableConcept;

  parameters?: IPrimitiveString;
  _parameters?: IElement;

  definingSubstanceReference?: IReference;
  
  definingSubstanceCodeableConcept?: ICodeableConcept;

  amountQuantity?: IQuantity;
  
  amountString?: IPrimitiveString;
  _amountString?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
