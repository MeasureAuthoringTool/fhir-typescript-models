/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  ISimpleQuantity,
} from "../internal";

export interface IMedicationKnowledgePackaging extends IBackboneElement {
  type?: ICodeableConcept;

  quantity?: ISimpleQuantity;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
