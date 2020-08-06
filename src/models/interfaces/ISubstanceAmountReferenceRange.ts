/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IQuantity,
} from "../internal";

export interface ISubstanceAmountReferenceRange extends IElement {
  lowLimit?: IQuantity;

  highLimit?: IQuantity;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
