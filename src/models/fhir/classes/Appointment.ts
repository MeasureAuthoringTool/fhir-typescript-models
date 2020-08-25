/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  AppointmentParticipant,
  AppointmentStatus,
  CodeableConcept,
  DomainResource,
  Extension,
  IAppointment,
  Identifier,
  Period,
  PrimitiveDateTime,
  PrimitiveInstant,
  PrimitivePositiveInt,
  PrimitiveString,
  PrimitiveUnsignedInt,
  Reference,
} from "../internal";

export class Appointment extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Appointment";

  public identifier?: Array<Identifier>;

  public status?: AppointmentStatus;

  public cancelationReason?: CodeableConcept;

  public serviceCategory?: Array<CodeableConcept>;

  public serviceType?: Array<CodeableConcept>;

  public specialty?: Array<CodeableConcept>;

  public appointmentType?: CodeableConcept;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public priority?: PrimitiveUnsignedInt;

  public description?: PrimitiveString;

  public supportingInformation?: Array<Reference>;

  public start?: PrimitiveInstant;

  public end?: PrimitiveInstant;

  public minutesDuration?: PrimitivePositiveInt;

  public slot?: Array<Reference>;

  public created?: PrimitiveDateTime;

  public comment?: PrimitiveString;

  public patientInstruction?: PrimitiveString;

  public basedOn?: Array<Reference>;

  public participant?: Array<AppointmentParticipant>;

  public requestedPeriod?: Array<Period>;

  public static parse(
    json: IAppointment,
    providedInstance: Appointment = new Appointment()
  ): Appointment {
    const newInstance: Appointment = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status) {
      newInstance.status = AppointmentStatus.parsePrimitive(json.status, json._status);
    }
    if (json.cancelationReason) {
      newInstance.cancelationReason = CodeableConcept.parse(json.cancelationReason);
    }
    if (json.serviceCategory) {
      newInstance.serviceCategory = json.serviceCategory.map((x) => CodeableConcept.parse(x));
    }
    if (json.serviceType) {
      newInstance.serviceType = json.serviceType.map((x) => CodeableConcept.parse(x));
    }
    if (json.specialty) {
      newInstance.specialty = json.specialty.map((x) => CodeableConcept.parse(x));
    }
    if (json.appointmentType) {
      newInstance.appointmentType = CodeableConcept.parse(json.appointmentType);
    }
    if (json.reasonCode) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.priority) {
      newInstance.priority = PrimitiveUnsignedInt.parsePrimitive(json.priority, json._priority);
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.supportingInformation) {
      newInstance.supportingInformation = json.supportingInformation.map((x) => Reference.parse(x));
    }
    if (json.start) {
      newInstance.start = PrimitiveInstant.parsePrimitive(json.start, json._start);
    }
    if (json.end) {
      newInstance.end = PrimitiveInstant.parsePrimitive(json.end, json._end);
    }
    if (json.minutesDuration) {
      newInstance.minutesDuration = PrimitivePositiveInt.parsePrimitive(json.minutesDuration, json._minutesDuration);
    }
    if (json.slot) {
      newInstance.slot = json.slot.map((x) => Reference.parse(x));
    }
    if (json.created) {
      newInstance.created = PrimitiveDateTime.parsePrimitive(json.created, json._created);
    }
    if (json.comment) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    if (json.patientInstruction) {
      newInstance.patientInstruction = PrimitiveString.parsePrimitive(json.patientInstruction, json._patientInstruction);
    }
    if (json.basedOn) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.participant) {
      newInstance.participant = json.participant.map((x) => AppointmentParticipant.parse(x));
    }
    if (json.requestedPeriod) {
      newInstance.requestedPeriod = json.requestedPeriod.map((x) => Period.parse(x));
    }
    return newInstance;
  }

  public static isAppointment(input?: unknown): input is Appointment {
    const castInput = input as Appointment;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Appointment";
  }

  public toJSON(): IAppointment {
    const result: IAppointment = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.cancelationReason) {
      result.cancelationReason = this.cancelationReason.toJSON();
    }

    if (this.serviceCategory) {
      result.serviceCategory = this.serviceCategory.map((x) => x.toJSON());
    }

    if (this.serviceType) {
      result.serviceType = this.serviceType.map((x) => x.toJSON());
    }

    if (this.specialty) {
      result.specialty = this.specialty.map((x) => x.toJSON());
    }

    if (this.appointmentType) {
      result.appointmentType = this.appointmentType.toJSON();
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.priority) {
      result.priority = this.priority.value;
      result._priority = Extension.serializePrimitiveExtension(this.priority);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.supportingInformation) {
      result.supportingInformation = this.supportingInformation.map((x) => x.toJSON());
    }

    if (this.start) {
      result.start = this.start.value;
      result._start = Extension.serializePrimitiveExtension(this.start);
    }

    if (this.end) {
      result.end = this.end.value;
      result._end = Extension.serializePrimitiveExtension(this.end);
    }

    if (this.minutesDuration) {
      result.minutesDuration = this.minutesDuration.value;
      result._minutesDuration = Extension.serializePrimitiveExtension(this.minutesDuration);
    }

    if (this.slot) {
      result.slot = this.slot.map((x) => x.toJSON());
    }

    if (this.created) {
      result.created = this.created.value;
      result._created = Extension.serializePrimitiveExtension(this.created);
    }

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    if (this.patientInstruction) {
      result.patientInstruction = this.patientInstruction.value;
      result._patientInstruction = Extension.serializePrimitiveExtension(this.patientInstruction);
    }

    if (this.basedOn) {
      result.basedOn = this.basedOn.map((x) => x.toJSON());
    }

    if (this.participant) {
      result.participant = this.participant.map((x) => x.toJSON());
    }

    if (this.requestedPeriod) {
      result.requestedPeriod = this.requestedPeriod.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Appointment";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
