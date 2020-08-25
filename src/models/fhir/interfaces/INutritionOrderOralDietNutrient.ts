/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  ISimpleQuantity,
} from "../internal";

export interface INutritionOrderOralDietNutrient extends IBackboneElement {
  modifier?: ICodeableConcept;

  amount?: ISimpleQuantity;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
