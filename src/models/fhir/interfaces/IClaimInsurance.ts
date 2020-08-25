/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IIdentifier,
  IPrimitiveBoolean,
  IPrimitivePositiveInt,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IClaimInsurance extends IBackboneElement {
  sequence?: IPrimitivePositiveInt;
  _sequence?: IElement;

  focal?: IPrimitiveBoolean;
  _focal?: IElement;

  identifier?: IIdentifier;

  coverage?: IReference;

  businessArrangement?: IPrimitiveString;
  _businessArrangement?: IElement;

  preAuthRef?: Array<IPrimitiveString>;
  _preAuthRef?: Array<IElement | null>;

  claimResponse?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
