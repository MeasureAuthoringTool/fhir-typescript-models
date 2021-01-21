/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  IAppointmentResponse,
  Identifier,
  ParticipantStatus,
  PrimitiveInstant,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("AppointmentResponse", "DomainResource")
export class AppointmentResponse extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AppointmentResponse";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("Reference")
  public appointment?: Reference;

  @FhirField("PrimitiveInstant")
  public start?: PrimitiveInstant;

  @FhirField("PrimitiveInstant")
  public end?: PrimitiveInstant;

  @FhirList("CodeableConcept")
  public participantType?: Array<CodeableConcept>;

  @FhirField("Reference")
  public actor?: Reference;

  @FhirField("ParticipantStatus")
  public participantStatus?: ParticipantStatus;

  @FhirField("PrimitiveString")
  public comment?: PrimitiveString;

  public static parse(
    json: IAppointmentResponse,
    providedInstance: AppointmentResponse = new AppointmentResponse()
  ): AppointmentResponse {
    const newInstance: AppointmentResponse = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.appointment !== undefined) {
      newInstance.appointment = Reference.parse(json.appointment);
    }
    if (json.start !== undefined) {
      newInstance.start = PrimitiveInstant.parsePrimitive(json.start, json._start);
    }
    if (json.end !== undefined) {
      newInstance.end = PrimitiveInstant.parsePrimitive(json.end, json._end);
    }
    if (json.participantType !== undefined) {
      newInstance.participantType = json.participantType.map((x) => CodeableConcept.parse(x));
    }
    if (json.actor !== undefined) {
      newInstance.actor = Reference.parse(json.actor);
    }
    if (json.participantStatus !== undefined) {
      newInstance.participantStatus = ParticipantStatus.parsePrimitive(json.participantStatus, json._participantStatus);
    }
    if (json.comment !== undefined) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    return newInstance;
  }

  public static isAppointmentResponse(input?: unknown): input is AppointmentResponse {
    const castInput = input as AppointmentResponse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AppointmentResponse";
  }

  public toJSON(): IAppointmentResponse {
    const result: IAppointmentResponse = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.appointment) {
      result.appointment = this.appointment.toJSON();
    }

    if (this.start) {
      result.start = this.start.value;
      result._start = Extension.serializePrimitiveExtension(this.start);
    }

    if (this.end) {
      result.end = this.end.value;
      result._end = Extension.serializePrimitiveExtension(this.end);
    }

    if (this.participantType) {
      result.participantType = this.participantType.map((x) => x.toJSON());
    }

    if (this.actor) {
      result.actor = this.actor.toJSON();
    }

    if (this.participantStatus) {
      result.participantStatus = this.participantStatus.value;
      result._participantStatus = Extension.serializePrimitiveExtension(this.participantStatus);
    }

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    return result;
  }

  public clone(): AppointmentResponse {
    return AppointmentResponse.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "AppointmentResponse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
