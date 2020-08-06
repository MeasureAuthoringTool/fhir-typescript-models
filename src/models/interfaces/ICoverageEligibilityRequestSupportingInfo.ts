/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
  IPrimitivePositiveInt,
  IReference,
} from "../internal";

export interface ICoverageEligibilityRequestSupportingInfo extends IBackboneElement {
  sequence?: IPrimitivePositiveInt;
  _sequence?: IElement;

  information?: IReference;

  appliesToAll?: IPrimitiveBoolean;
  _appliesToAll?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
