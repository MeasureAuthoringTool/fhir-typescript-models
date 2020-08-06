/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IExplanationOfBenefitInsurance extends IBackboneElement {
  focal?: IPrimitiveBoolean;
  _focal?: IElement;

  coverage?: IReference;

  preAuthRef?: Array<IPrimitiveString>;
  _preAuthRef?: Array<IElement | null>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
