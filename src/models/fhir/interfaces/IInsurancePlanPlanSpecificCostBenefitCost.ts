/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IQuantity,
} from "../internal";

export interface IInsurancePlanPlanSpecificCostBenefitCost extends IBackboneElement {
  type?: ICodeableConcept;

  applicability?: ICodeableConcept;

  qualifiers?: Array<ICodeableConcept>;

  value?: IQuantity;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
