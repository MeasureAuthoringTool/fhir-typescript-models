/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IDuration,
  ISimpleQuantity,
} from "../internal";

export interface IMedicationKnowledgeRegulatoryMaxDispense extends IBackboneElement {
  quantity?: ISimpleQuantity;

  period?: IDuration;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
