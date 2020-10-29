/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  ISlot,
  PrimitiveBoolean,
  PrimitiveInstant,
  PrimitiveString,
  Reference,
  SlotStatus,
  FieldMetadata
} from "../internal";

export class Slot extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Slot";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
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
      fieldName: "appointmentType",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "schedule",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "status",
      fieldType: [SlotStatus],
      isArray: false
    }, {
      fieldName: "start",
      fieldType: [PrimitiveInstant],
      isArray: false
    }, {
      fieldName: "end",
      fieldType: [PrimitiveInstant],
      isArray: false
    }, {
      fieldName: "overbooked",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "comment",
      fieldType: [PrimitiveString],
      isArray: false
    }];
  }

  public identifier?: Array<Identifier>;

  public serviceCategory?: Array<CodeableConcept>;

  public serviceType?: Array<CodeableConcept>;

  public specialty?: Array<CodeableConcept>;

  public appointmentType?: CodeableConcept;

  public schedule?: Reference;

  public status?: SlotStatus;

  public start?: PrimitiveInstant;

  public end?: PrimitiveInstant;

  public overbooked?: PrimitiveBoolean;

  public comment?: PrimitiveString;

  public static parse(
    json: ISlot,
    providedInstance: Slot = new Slot()
  ): Slot {
    const newInstance: Slot = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
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
    if (json.schedule !== undefined) {
      newInstance.schedule = Reference.parse(json.schedule);
    }
    if (json.status !== undefined) {
      newInstance.status = SlotStatus.parsePrimitive(json.status, json._status);
    }
    if (json.start !== undefined) {
      newInstance.start = PrimitiveInstant.parsePrimitive(json.start, json._start);
    }
    if (json.end !== undefined) {
      newInstance.end = PrimitiveInstant.parsePrimitive(json.end, json._end);
    }
    if (json.overbooked !== undefined) {
      newInstance.overbooked = PrimitiveBoolean.parsePrimitive(json.overbooked, json._overbooked);
    }
    if (json.comment !== undefined) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    return newInstance;
  }

  public static isSlot(input?: unknown): input is Slot {
    const castInput = input as Slot;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Slot";
  }

  public toJSON(): ISlot {
    const result: ISlot = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
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

    if (this.schedule) {
      result.schedule = this.schedule.toJSON();
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.start) {
      result.start = this.start.value;
      result._start = Extension.serializePrimitiveExtension(this.start);
    }

    if (this.end) {
      result.end = this.end.value;
      result._end = Extension.serializePrimitiveExtension(this.end);
    }

    if (this.overbooked) {
      result.overbooked = this.overbooked.value;
      result._overbooked = Extension.serializePrimitiveExtension(this.overbooked);
    }

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    return result;
  }

  public clone(): Slot {
    return Slot.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Slot";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
