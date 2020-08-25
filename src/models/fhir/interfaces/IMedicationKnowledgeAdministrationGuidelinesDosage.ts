/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IDosage,
} from "../internal";

export interface IMedicationKnowledgeAdministrationGuidelinesDosage extends IBackboneElement {
  type?: ICodeableConcept;

  dosage?: Array<IDosage>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
