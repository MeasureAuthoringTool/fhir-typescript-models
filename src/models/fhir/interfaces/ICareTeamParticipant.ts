/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IPeriod,
  IReference,
} from "../internal";

export interface ICareTeamParticipant extends IBackboneElement {
  role?: Array<ICodeableConcept>;

  member?: IReference;

  onBehalfOf?: IReference;

  period?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
