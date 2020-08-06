/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength,
  IPrimitiveString,
  IRatio,
} from "../internal";

export interface IMedicinalProductIngredientSpecifiedSubstanceStrength extends IBackboneElement {
  presentation?: IRatio;

  presentationLowLimit?: IRatio;

  concentration?: IRatio;

  concentrationLowLimit?: IRatio;

  measurementPoint?: IPrimitiveString;
  _measurementPoint?: IElement;

  country?: Array<ICodeableConcept>;

  referenceStrength?: Array<IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
