/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  IAppointmentResponse,
  Identifier,
  ParticipantStatus,
  PrimitiveInstant,
  PrimitiveString,
  Reference,
} from "../internal";

export class AppointmentResponse extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AppointmentResponse";

  public identifier?: Array<Identifier>;

  public appointment?: Reference;

  public start?: PrimitiveInstant;

  public end?: PrimitiveInstant;

  public participantType?: Array<CodeableConcept>;

  public actor?: Reference;

  public participantStatus?: ParticipantStatus;

  public comment?: PrimitiveString;

  public static parse(
    json: IAppointmentResponse,
    providedInstance: AppointmentResponse = new AppointmentResponse()
  ): AppointmentResponse {
    const newInstance: AppointmentResponse = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.appointment) {
      newInstance.appointment = Reference.parse(json.appointment);
    }
    if (json.start) {
      newInstance.start = PrimitiveInstant.parsePrimitive(json.start, json._start);
    }
    if (json.end) {
      newInstance.end = PrimitiveInstant.parsePrimitive(json.end, json._end);
    }
    if (json.participantType) {
      newInstance.participantType = json.participantType.map((x) => CodeableConcept.parse(x));
    }
    if (json.actor) {
      newInstance.actor = Reference.parse(json.actor);
    }
    if (json.participantStatus) {
      newInstance.participantStatus = ParticipantStatus.parsePrimitive(json.participantStatus, json._participantStatus);
    }
    if (json.comment) {
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
  
  public getTypeName(): string {
    return "AppointmentResponse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
