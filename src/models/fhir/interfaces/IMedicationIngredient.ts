/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveBoolean,
  IRatio,
  IReference,
} from "../internal";

export interface IMedicationIngredient extends IBackboneElement {
  itemCodeableConcept?: ICodeableConcept;
  
  itemReference?: IReference;

  isActive?: IPrimitiveBoolean;
  _isActive?: IElement;

  strength?: IRatio;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
