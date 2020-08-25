/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAppointmentParticipant,
  IAppointmentStatus,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveInstant,
  IPrimitivePositiveInt,
  IPrimitiveString,
  IPrimitiveUnsignedInt,
  IReference,
} from "../internal";

export interface IAppointment extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IAppointmentStatus;
  _status?: IElement;

  cancelationReason?: ICodeableConcept;

  serviceCategory?: Array<ICodeableConcept>;

  serviceType?: Array<ICodeableConcept>;

  specialty?: Array<ICodeableConcept>;

  appointmentType?: ICodeableConcept;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  priority?: IPrimitiveUnsignedInt;
  _priority?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  supportingInformation?: Array<IReference>;

  start?: IPrimitiveInstant;
  _start?: IElement;

  end?: IPrimitiveInstant;
  _end?: IElement;

  minutesDuration?: IPrimitivePositiveInt;
  _minutesDuration?: IElement;

  slot?: Array<IReference>;

  created?: IPrimitiveDateTime;
  _created?: IElement;

  comment?: IPrimitiveString;
  _comment?: IElement;

  patientInstruction?: IPrimitiveString;
  _patientInstruction?: IElement;

  basedOn?: Array<IReference>;

  participant?: Array<IAppointmentParticipant>;

  requestedPeriod?: Array<IPeriod>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
