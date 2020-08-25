/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IIdentifier,
  IInsurancePlanPlanGeneralCost,
  IInsurancePlanPlanSpecificCost,
  IReference,
} from "../internal";

export interface IInsurancePlanPlan extends IBackboneElement {
  identifier?: Array<IIdentifier>;

  type?: ICodeableConcept;

  coverageArea?: Array<IReference>;

  network?: Array<IReference>;

  generalCost?: Array<IInsurancePlanPlanGeneralCost>;

  specificCost?: Array<IInsurancePlanPlanSpecificCost>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
