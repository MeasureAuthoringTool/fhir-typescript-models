/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IReference,
} from "../internal";

export interface IMedicinalProductContraindicationOtherTherapy extends IBackboneElement {
  therapyRelationshipType?: ICodeableConcept;

  medicationCodeableConcept?: ICodeableConcept;
  
  medicationReference?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
