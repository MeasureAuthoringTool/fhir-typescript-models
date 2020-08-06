/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  INutritionOrderEnteralFormulaAdministration,
  IPrimitiveString,
  ISimpleQuantity,
} from "../internal";

export interface INutritionOrderEnteralFormula extends IBackboneElement {
  baseFormulaType?: ICodeableConcept;

  baseFormulaProductName?: IPrimitiveString;
  _baseFormulaProductName?: IElement;

  additiveType?: ICodeableConcept;

  additiveProductName?: IPrimitiveString;
  _additiveProductName?: IElement;

  caloricDensity?: ISimpleQuantity;

  routeofAdministration?: ICodeableConcept;

  administration?: Array<INutritionOrderEnteralFormulaAdministration>;

  maxVolumeToDeliver?: ISimpleQuantity;

  administrationInstruction?: IPrimitiveString;
  _administrationInstruction?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
