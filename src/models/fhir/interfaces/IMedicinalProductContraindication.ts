/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IMedicinalProductContraindicationOtherTherapy,
  IPopulation,
  IReference,
} from "../internal";

export interface IMedicinalProductContraindication extends IDomainResource {
  subject?: Array<IReference>;

  disease?: ICodeableConcept;

  diseaseStatus?: ICodeableConcept;

  comorbidity?: Array<ICodeableConcept>;

  therapeuticIndication?: Array<IReference>;

  otherTherapy?: Array<IMedicinalProductContraindicationOtherTherapy>;

  population?: Array<IPopulation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
