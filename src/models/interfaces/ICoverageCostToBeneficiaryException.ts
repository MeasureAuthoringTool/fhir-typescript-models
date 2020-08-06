/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IPeriod,
} from "../internal";

export interface ICoverageCostToBeneficiaryException extends IBackboneElement {
  type?: ICodeableConcept;

  period?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
