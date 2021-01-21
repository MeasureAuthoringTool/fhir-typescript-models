/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  ISchedule,
  Period,
  PrimitiveBoolean,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("Schedule", "DomainResource")
export class Schedule extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Schedule";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("PrimitiveBoolean")
  public active?: PrimitiveBoolean;

  @FhirList("CodeableConcept")
  public serviceCategory?: Array<CodeableConcept>;

  @FhirList("CodeableConcept")
  public serviceType?: Array<CodeableConcept>;

  @FhirList("CodeableConcept")
  public specialty?: Array<CodeableConcept>;

  @FhirList("Reference")
  public actor?: Array<Reference>;

  @FhirField("Period")
  public planningHorizon?: Period;

  @FhirField("PrimitiveString")
  public comment?: PrimitiveString;

  public static parse(
    json: ISchedule,
    providedInstance: Schedule = new Schedule()
  ): Schedule {
    const newInstance: Schedule = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.active !== undefined) {
      newInstance.active = PrimitiveBoolean.parsePrimitive(json.active, json._active);
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
    if (json.actor !== undefined) {
      newInstance.actor = json.actor.map((x) => Reference.parse(x));
    }
    if (json.planningHorizon !== undefined) {
      newInstance.planningHorizon = Period.parse(json.planningHorizon);
    }
    if (json.comment !== undefined) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    return newInstance;
  }

  public static isSchedule(input?: unknown): input is Schedule {
    const castInput = input as Schedule;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Schedule";
  }

  public toJSON(): ISchedule {
    const result: ISchedule = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.active) {
      result.active = this.active.value;
      result._active = Extension.serializePrimitiveExtension(this.active);
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

    if (this.actor) {
      result.actor = this.actor.map((x) => x.toJSON());
    }

    if (this.planningHorizon) {
      result.planningHorizon = this.planningHorizon.toJSON();
    }

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    return result;
  }

  public clone(): Schedule {
    return Schedule.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Schedule";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
