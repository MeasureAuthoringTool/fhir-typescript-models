/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IPeriod,
  IReference,
} from "../internal";

export interface ICompositionEvent extends IBackboneElement {
  code?: Array<ICodeableConcept>;

  period?: IPeriod;

  detail?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
