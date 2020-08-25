/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
  ISimpleQuantity,
  ITiming,
} from "../internal";

export interface INutritionOrderSupplement extends IBackboneElement {
  type?: ICodeableConcept;

  productName?: IPrimitiveString;
  _productName?: IElement;

  schedule?: Array<ITiming>;

  quantity?: ISimpleQuantity;

  instruction?: IPrimitiveString;
  _instruction?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
