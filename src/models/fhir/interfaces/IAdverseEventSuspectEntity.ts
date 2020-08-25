/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAdverseEventSuspectEntityCausality,
  IBackboneElement,
  IReference,
} from "../internal";

export interface IAdverseEventSuspectEntity extends IBackboneElement {
  instance?: IReference;

  causality?: Array<IAdverseEventSuspectEntityCausality>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
