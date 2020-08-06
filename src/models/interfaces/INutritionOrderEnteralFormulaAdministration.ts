/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IRatio,
  ISimpleQuantity,
  ITiming,
} from "../internal";

export interface INutritionOrderEnteralFormulaAdministration extends IBackboneElement {
  schedule?: ITiming;

  quantity?: ISimpleQuantity;

  rateSimpleQuantity?: ISimpleQuantity;
  
  rateRatio?: IRatio;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
