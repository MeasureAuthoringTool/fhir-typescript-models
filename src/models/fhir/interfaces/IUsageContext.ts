/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  ICoding,
  IElement,
  IQuantity,
  IRange,
  IReference,
} from "../internal";

export interface IUsageContext extends IElement {
  code?: ICoding;

  valueCodeableConcept?: ICodeableConcept;
  
  valueQuantity?: IQuantity;
  
  valueRange?: IRange;
  
  valueReference?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
