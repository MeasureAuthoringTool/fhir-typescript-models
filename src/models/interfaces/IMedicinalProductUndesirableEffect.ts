/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IPopulation,
  IReference,
} from "../internal";

export interface IMedicinalProductUndesirableEffect extends IDomainResource {
  subject?: Array<IReference>;

  symptomConditionEffect?: ICodeableConcept;

  classification?: ICodeableConcept;

  frequencyOfOccurrence?: ICodeableConcept;

  population?: Array<IPopulation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
