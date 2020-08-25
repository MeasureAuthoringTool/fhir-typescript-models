/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IRange,
} from "../internal";

export interface IPopulation extends IBackboneElement {
  ageRange?: IRange;
  
  ageCodeableConcept?: ICodeableConcept;

  gender?: ICodeableConcept;

  race?: ICodeableConcept;

  physiologicalCondition?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
