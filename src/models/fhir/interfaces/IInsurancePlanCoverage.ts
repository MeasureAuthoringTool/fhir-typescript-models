/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IInsurancePlanCoverageBenefit,
  IReference,
} from "../internal";

export interface IInsurancePlanCoverage extends IBackboneElement {
  type?: ICodeableConcept;

  network?: Array<IReference>;

  benefit?: Array<IInsurancePlanCoverageBenefit>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
