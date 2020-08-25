/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IMedicationKnowledgeAdministrationGuidelinesDosage,
  IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics,
  IReference,
} from "../internal";

export interface IMedicationKnowledgeAdministrationGuidelines extends IBackboneElement {
  dosage?: Array<IMedicationKnowledgeAdministrationGuidelinesDosage>;

  indicationCodeableConcept?: ICodeableConcept;
  
  indicationReference?: IReference;

  patientCharacteristics?: Array<IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
