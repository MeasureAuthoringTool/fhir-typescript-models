/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IInsurancePlanCoverageBenefitLimit,
  IPrimitiveString,
} from "../internal";

export interface IInsurancePlanCoverageBenefit extends IBackboneElement {
  type?: ICodeableConcept;

  requirement?: IPrimitiveString;
  _requirement?: IElement;

  limit?: Array<IInsurancePlanCoverageBenefitLimit>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
