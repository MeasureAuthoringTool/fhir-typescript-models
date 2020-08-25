/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  ISubstanceAmount,
} from "../internal";

export interface ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends IBackboneElement {
  degree?: ICodeableConcept;

  amount?: ISubstanceAmount;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
