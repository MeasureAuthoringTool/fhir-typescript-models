/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IMedicinalProductIngredientSpecifiedSubstanceStrength,
} from "../internal";

export interface IMedicinalProductIngredientSubstance extends IBackboneElement {
  code?: ICodeableConcept;

  strength?: Array<IMedicinalProductIngredientSpecifiedSubstanceStrength>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
