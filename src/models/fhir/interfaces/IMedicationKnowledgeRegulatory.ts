/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IMedicationKnowledgeRegulatoryMaxDispense,
  IMedicationKnowledgeRegulatorySchedule,
  IMedicationKnowledgeRegulatorySubstitution,
  IReference,
} from "../internal";

export interface IMedicationKnowledgeRegulatory extends IBackboneElement {
  regulatoryAuthority?: IReference;

  substitution?: Array<IMedicationKnowledgeRegulatorySubstitution>;

  schedule?: Array<IMedicationKnowledgeRegulatorySchedule>;

  maxDispense?: IMedicationKnowledgeRegulatoryMaxDispense;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
