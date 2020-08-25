/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IParticipantRequired,
  IParticipationStatus,
  IPeriod,
  IReference,
} from "../internal";

export interface IAppointmentParticipant extends IBackboneElement {
  type?: Array<ICodeableConcept>;

  actor?: IReference;

  required?: IParticipantRequired;
  _required?: IElement;

  status?: IParticipationStatus;
  _status?: IElement;

  period?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
