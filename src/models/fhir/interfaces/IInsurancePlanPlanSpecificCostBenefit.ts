/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IInsurancePlanPlanSpecificCostBenefitCost,
} from "../internal";

export interface IInsurancePlanPlanSpecificCostBenefit extends IBackboneElement {
  type?: ICodeableConcept;

  cost?: Array<IInsurancePlanPlanSpecificCostBenefitCost>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
