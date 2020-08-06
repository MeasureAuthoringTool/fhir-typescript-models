/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IPeriod,
  IReference,
} from "../internal";

export interface IEncounterParticipant extends IBackboneElement {
  type?: Array<ICodeableConcept>;

  period?: IPeriod;

  individual?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
