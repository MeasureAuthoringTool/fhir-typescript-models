/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IDuration,
  ISimpleQuantity,
} from "../internal";

export interface IMedicationKnowledgeKinetics extends IBackboneElement {
  areaUnderCurve?: Array<ISimpleQuantity>;

  lethalDose50?: Array<ISimpleQuantity>;

  halfLifePeriod?: IDuration;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
