/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IParticipantStatus,
  IPrimitiveInstant,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IAppointmentResponse extends IDomainResource {
  identifier?: Array<IIdentifier>;

  appointment?: IReference;

  start?: IPrimitiveInstant;
  _start?: IElement;

  end?: IPrimitiveInstant;
  _end?: IElement;

  participantType?: Array<ICodeableConcept>;

  actor?: IReference;

  participantStatus?: IParticipantStatus;
  _participantStatus?: IElement;

  comment?: IPrimitiveString;
  _comment?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
