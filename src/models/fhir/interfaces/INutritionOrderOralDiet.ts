/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  INutritionOrderOralDietNutrient,
  INutritionOrderOralDietTexture,
  IPrimitiveString,
  ITiming,
} from "../internal";

export interface INutritionOrderOralDiet extends IBackboneElement {
  type?: Array<ICodeableConcept>;

  schedule?: Array<ITiming>;

  nutrient?: Array<INutritionOrderOralDietNutrient>;

  texture?: Array<INutritionOrderOralDietTexture>;

  fluidConsistencyType?: Array<ICodeableConcept>;

  instruction?: IPrimitiveString;
  _instruction?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
