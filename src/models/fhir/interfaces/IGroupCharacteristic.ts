/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPeriod,
  IPrimitiveBoolean,
  IQuantity,
  IRange,
  IReference,
} from "../internal";

export interface IGroupCharacteristic extends IBackboneElement {
  code?: ICodeableConcept;

  valueCodeableConcept?: ICodeableConcept;
  
  valueBoolean?: IPrimitiveBoolean;
  _valueBoolean?: IElement;
  
  valueQuantity?: IQuantity;
  
  valueRange?: IRange;
  
  valueReference?: IReference;

  exclude?: IPrimitiveBoolean;
  _exclude?: IElement;

  period?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
