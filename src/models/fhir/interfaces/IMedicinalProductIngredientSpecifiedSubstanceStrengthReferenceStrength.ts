/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
  IRatio,
} from "../internal";

export interface IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends IBackboneElement {
  substance?: ICodeableConcept;

  strength?: IRatio;

  strengthLowLimit?: IRatio;

  measurementPoint?: IPrimitiveString;
  _measurementPoint?: IElement;

  country?: Array<ICodeableConcept>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
