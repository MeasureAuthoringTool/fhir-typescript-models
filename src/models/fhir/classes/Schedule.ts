/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  ISchedule,
  Period,
  PrimitiveBoolean,
  PrimitiveString,
  Reference,
  FieldMetadata
} from "../internal";

export class Schedule extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Schedule";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "active",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "serviceCategory",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "serviceType",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "specialty",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "actor",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "planningHorizon",
      fieldType: [Period],
      isArray: false
    }, {
      fieldName: "comment",
      fieldType: [PrimitiveString],
      isArray: false
    }];
  }

  public identifier?: Array<Identifier>;

  public active?: PrimitiveBoolean;

  public serviceCategory?: Array<CodeableConcept>;

  public serviceType?: Array<CodeableConcept>;

  public specialty?: Array<CodeableConcept>;

  public actor?: Array<Reference>;

  public planningHorizon?: Period;

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
