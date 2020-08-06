/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IMedicinalProductIndicationOtherTherapy,
  IPopulation,
  IQuantity,
  IReference,
} from "../internal";

export interface IMedicinalProductIndication extends IDomainResource {
  subject?: Array<IReference>;

  diseaseSymptomProcedure?: ICodeableConcept;

  diseaseStatus?: ICodeableConcept;

  comorbidity?: Array<ICodeableConcept>;

  intendedEffect?: ICodeableConcept;

  duration?: IQuantity;

  otherTherapy?: Array<IMedicinalProductIndicationOtherTherapy>;

  undesirableEffect?: Array<IReference>;

  population?: Array<IPopulation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
