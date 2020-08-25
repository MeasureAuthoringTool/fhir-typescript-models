/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICoverageEligibilityResponseInsuranceItem,
  IElement,
  IPeriod,
  IPrimitiveBoolean,
  IReference,
} from "../internal";

export interface ICoverageEligibilityResponseInsurance extends IBackboneElement {
  coverage?: IReference;

  inforce?: IPrimitiveBoolean;
  _inforce?: IElement;

  benefitPeriod?: IPeriod;

  item?: Array<ICoverageEligibilityResponseInsuranceItem>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
