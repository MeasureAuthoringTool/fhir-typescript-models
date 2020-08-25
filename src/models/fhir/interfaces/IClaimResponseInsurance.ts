/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
  IPrimitivePositiveInt,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IClaimResponseInsurance extends IBackboneElement {
  sequence?: IPrimitivePositiveInt;
  _sequence?: IElement;

  focal?: IPrimitiveBoolean;
  _focal?: IElement;

  coverage?: IReference;

  businessArrangement?: IPrimitiveString;
  _businessArrangement?: IElement;

  claimResponse?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
