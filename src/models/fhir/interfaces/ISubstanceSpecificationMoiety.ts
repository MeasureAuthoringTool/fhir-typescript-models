/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPrimitiveString,
  IQuantity,
} from "../internal";

export interface ISubstanceSpecificationMoiety extends IBackboneElement {
  role?: ICodeableConcept;

  identifier?: IIdentifier;

  name?: IPrimitiveString;
  _name?: IElement;

  stereochemistry?: ICodeableConcept;

  opticalActivity?: ICodeableConcept;

  molecularFormula?: IPrimitiveString;
  _molecularFormula?: IElement;

  amountQuantity?: IQuantity;
  
  amountString?: IPrimitiveString;
  _amountString?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
