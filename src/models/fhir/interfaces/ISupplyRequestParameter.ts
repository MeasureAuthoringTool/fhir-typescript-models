/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveBoolean,
  IQuantity,
  IRange,
} from "../internal";

export interface ISupplyRequestParameter extends IBackboneElement {
  code?: ICodeableConcept;

  valueCodeableConcept?: ICodeableConcept;
  
  valueQuantity?: IQuantity;
  
  valueRange?: IRange;
  
  valueBoolean?: IPrimitiveBoolean;
  _valueBoolean?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
