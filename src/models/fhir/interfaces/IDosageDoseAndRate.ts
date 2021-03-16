/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IElement,
  IRange,
  IRatio,
  ISimpleQuantity,
} from "../internal";

export interface IDosageDoseAndRate extends IElement {
  type?: ICodeableConcept;

  doseRange?: IRange;
  
  doseQuantity?: ISimpleQuantity;

  rateRatio?: IRatio;
  
  rateRange?: IRange;
  
  rateQuantity?: ISimpleQuantity;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
