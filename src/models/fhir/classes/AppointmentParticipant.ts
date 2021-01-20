/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  IAppointmentParticipant,
  ParticipantRequired,
  ParticipationStatus,
  Period,
  Reference,
  FhirType
} from "../internal";

@FhirType("AppointmentParticipant", "BackboneElement")
export class AppointmentParticipant extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Appointment.Participant";

  static readonly primaryCodePath: string | null = null;

  @FhirList("CodeableConcept")
  public type?: Array<CodeableConcept>;

  @FhirField("Reference")
  public actor?: Reference;

  @FhirField("ParticipantRequired")
  public required?: ParticipantRequired;

  @FhirField("ParticipationStatus")
  public status?: ParticipationStatus;

  @FhirField("Period")
  public period?: Period;

  public static parse(
    json: IAppointmentParticipant,
    providedInstance: AppointmentParticipant = new AppointmentParticipant()
  ): AppointmentParticipant {
    const newInstance: AppointmentParticipant = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.actor !== undefined) {
      newInstance.actor = Reference.parse(json.actor);
    }
    if (json.required !== undefined) {
      newInstance.required = ParticipantRequired.parsePrimitive(json.required, json._required);
    }
    if (json.status !== undefined) {
      newInstance.status = ParticipationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    return newInstance;
  }

  public static isAppointmentParticipant(input?: unknown): input is AppointmentParticipant {
    const castInput = input as AppointmentParticipant;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AppointmentParticipant";
  }

  public toJSON(): IAppointmentParticipant {
    const result: IAppointmentParticipant = super.toJSON();

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
    }

    if (this.actor) {
      result.actor = this.actor.toJSON();
    }

    if (this.required) {
      result.required = this.required.value;
      result._required = Extension.serializePrimitiveExtension(this.required);
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    return result;
  }

  public clone(): AppointmentParticipant {
    return AppointmentParticipant.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "AppointmentParticipant";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
