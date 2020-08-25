/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface ICoverageEligibilityRequestInsurance extends IBackboneElement {
  focal?: IPrimitiveBoolean;
  _focal?: IElement;

  coverage?: IReference;

  businessArrangement?: IPrimitiveString;
  _businessArrangement?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
