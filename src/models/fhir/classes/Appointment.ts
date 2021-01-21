/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  AppointmentParticipant,
  AppointmentStatus,
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  IAppointment,
  Identifier,
  Period,
  PrimitiveDateTime,
  PrimitiveInstant,
  PrimitivePositiveInt,
  PrimitiveString,
  PrimitiveUnsignedInt,
  Reference,
  FhirType
} from "../internal";

@FhirType("Appointment", "DomainResource")
export class Appointment extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Appointment";

  static readonly primaryCodePath: string | null = "serviceType";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("AppointmentStatus")
  public status?: AppointmentStatus;

  @FhirField("CodeableConcept")
  public cancelationReason?: CodeableConcept;

  @FhirList("CodeableConcept")
  public serviceCategory?: Array<CodeableConcept>;

  @FhirList("CodeableConcept")
  public serviceType?: Array<CodeableConcept>;

  @FhirList("CodeableConcept")
  public specialty?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public appointmentType?: CodeableConcept;

  @FhirList("CodeableConcept")
  public reasonCode?: Array<CodeableConcept>;

  @FhirList("Reference")
  public reasonReference?: Array<Reference>;

  @FhirField("PrimitiveUnsignedInt")
  public priority?: PrimitiveUnsignedInt;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirList("Reference")
  public supportingInformation?: Array<Reference>;

  @FhirField("PrimitiveInstant")
  public start?: PrimitiveInstant;

  @FhirField("PrimitiveInstant")
  public end?: PrimitiveInstant;

  @FhirField("PrimitivePositiveInt")
  public minutesDuration?: PrimitivePositiveInt;

  @FhirList("Reference")
  public slot?: Array<Reference>;

  @FhirField("PrimitiveDateTime")
  public created?: PrimitiveDateTime;

  @FhirField("PrimitiveString")
  public comment?: PrimitiveString;

  @FhirField("PrimitiveString")
  public patientInstruction?: PrimitiveString;

  @FhirList("Reference")
  public basedOn?: Array<Reference>;

  @FhirList("AppointmentParticipant")
  public participant?: Array<AppointmentParticipant>;

  @FhirList("Period")
  public requestedPeriod?: Array<Period>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.serviceType?.[0];
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.serviceType = primaryCode ? [primaryCode] : [];
  }

  public static parse(
    json: IAppointment,
    providedInstance: Appointment = new Appointment()
  ): Appointment {
    const newInstance: Appointment = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = AppointmentStatus.parsePrimitive(json.status, json._status);
    }
    if (json.cancelationReason !== undefined) {
      newInstance.cancelationReason = CodeableConcept.parse(json.cancelationReason);
    }
    if (json.serviceCategory !== undefined) {
      newInstance.serviceCategory = json.serviceCategory.map((x) => CodeableConcept.parse(x));
    }
    if (json.serviceType !== undefined) {
      newInstance.serviceType = json.serviceType.map((x) => CodeableConcept.parse(x));
    }
    if (json.specialty !== undefined) {
      newInstance.specialty = json.specialty.map((x) => CodeableConcept.parse(x));
    }
    if (json.appointmentType !== undefined) {
      newInstance.appointmentType = CodeableConcept.parse(json.appointmentType);
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.priority !== undefined) {
      newInstance.priority = PrimitiveUnsignedInt.parsePrimitive(json.priority, json._priority);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.supportingInformation !== undefined) {
      newInstance.supportingInformation = json.supportingInformation.map((x) => Reference.parse(x));
    }
    if (json.start !== undefined) {
      newInstance.start = PrimitiveInstant.parsePrimitive(json.start, json._start);
    }
    if (json.end !== undefined) {
      newInstance.end = PrimitiveInstant.parsePrimitive(json.end, json._end);
    }
    if (json.minutesDuration !== undefined) {
      newInstance.minutesDuration = PrimitivePositiveInt.parsePrimitive(json.minutesDuration, json._minutesDuration);
    }
    if (json.slot !== undefined) {
      newInstance.slot = json.slot.map((x) => Reference.parse(x));
    }
    if (json.created !== undefined) {
      newInstance.created = PrimitiveDateTime.parsePrimitive(json.created, json._created);
    }
    if (json.comment !== undefined) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    if (json.patientInstruction !== undefined) {
      newInstance.patientInstruction = PrimitiveString.parsePrimitive(json.patientInstruction, json._patientInstruction);
    }
    if (json.basedOn !== undefined) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.participant !== undefined) {
      newInstance.participant = json.participant.map((x) => AppointmentParticipant.parse(x));
    }
    if (json.requestedPeriod !== undefined) {
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

  public clone(): Appointment {
    return Appointment.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Appointment";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
