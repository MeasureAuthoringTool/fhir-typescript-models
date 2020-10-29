/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  Attachment,
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IMedia,
  MediaStatus,
  Period,
  PrimitiveDateTime,
  PrimitiveDecimal,
  PrimitiveInstant,
  PrimitivePositiveInt,
  PrimitiveString,
  Reference,
  FieldMetadata
} from "../internal";

export class Media extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Media";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "basedOn",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "partOf",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [MediaStatus],
      isArray: false
    }, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "modality",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "view",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "subject",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "encounter",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "created",
      fieldType: [PrimitiveDateTime, Period],
      isArray: false
    }, {
      fieldName: "issued",
      fieldType: [PrimitiveInstant],
      isArray: false
    }, {
      fieldName: "operator",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "reasonCode",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "bodySite",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "deviceName",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "device",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "height",
      fieldType: [PrimitivePositiveInt],
      isArray: false
    }, {
      fieldName: "width",
      fieldType: [PrimitivePositiveInt],
      isArray: false
    }, {
      fieldName: "frames",
      fieldType: [PrimitivePositiveInt],
      isArray: false
    }, {
      fieldName: "duration",
      fieldType: [PrimitiveDecimal],
      isArray: false
    }, {
      fieldName: "content",
      fieldType: [Attachment],
      isArray: false
    }, {
      fieldName: "note",
      fieldType: [Annotation],
      isArray: true
    }];
  }

  public identifier?: Array<Identifier>;

  public basedOn?: Array<Reference>;

  public partOf?: Array<Reference>;

  public status?: MediaStatus;

  public type?: CodeableConcept;

  public modality?: CodeableConcept;

  public view?: CodeableConcept;

  public subject?: Reference;

  public encounter?: Reference;

  public created?: PrimitiveDateTime | Period;

  public issued?: PrimitiveInstant;

  public operator?: Reference;

  public reasonCode?: Array<CodeableConcept>;

  public bodySite?: CodeableConcept;

  public deviceName?: PrimitiveString;

  public device?: Reference;

  public height?: PrimitivePositiveInt;

  public width?: PrimitivePositiveInt;

  public frames?: PrimitivePositiveInt;

  public duration?: PrimitiveDecimal;

  public content?: Attachment;

  public note?: Array<Annotation>;

  public static parse(
    json: IMedia,
    providedInstance: Media = new Media()
  ): Media {
    const newInstance: Media = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.basedOn !== undefined) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.partOf !== undefined) {
      newInstance.partOf = json.partOf.map((x) => Reference.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = MediaStatus.parsePrimitive(json.status, json._status);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.modality !== undefined) {
      newInstance.modality = CodeableConcept.parse(json.modality);
    }
    if (json.view !== undefined) {
      newInstance.view = CodeableConcept.parse(json.view);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.createdDateTime !== undefined) {
      newInstance.created = PrimitiveDateTime.parsePrimitive(json.createdDateTime, json._createdDateTime);
    }
    if (json.createdPeriod !== undefined) {
      newInstance.created = Period.parse(json.createdPeriod);
    }
    if (json.issued !== undefined) {
      newInstance.issued = PrimitiveInstant.parsePrimitive(json.issued, json._issued);
    }
    if (json.operator !== undefined) {
      newInstance.operator = Reference.parse(json.operator);
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.bodySite !== undefined) {
      newInstance.bodySite = CodeableConcept.parse(json.bodySite);
    }
    if (json.deviceName !== undefined) {
      newInstance.deviceName = PrimitiveString.parsePrimitive(json.deviceName, json._deviceName);
    }
    if (json.device !== undefined) {
      newInstance.device = Reference.parse(json.device);
    }
    if (json.height !== undefined) {
      newInstance.height = PrimitivePositiveInt.parsePrimitive(json.height, json._height);
    }
    if (json.width !== undefined) {
      newInstance.width = PrimitivePositiveInt.parsePrimitive(json.width, json._width);
    }
    if (json.frames !== undefined) {
      newInstance.frames = PrimitivePositiveInt.parsePrimitive(json.frames, json._frames);
    }
    if (json.duration !== undefined) {
      newInstance.duration = PrimitiveDecimal.parsePrimitive(json.duration, json._duration);
    }
    if (json.content !== undefined) {
      newInstance.content = Attachment.parse(json.content);
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isMedia(input?: unknown): input is Media {
    const castInput = input as Media;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Media";
  }

  public toJSON(): IMedia {
    const result: IMedia = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.basedOn) {
      result.basedOn = this.basedOn.map((x) => x.toJSON());
    }

    if (this.partOf) {
      result.partOf = this.partOf.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.modality) {
      result.modality = this.modality.toJSON();
    }

    if (this.view) {
      result.view = this.view.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.created && PrimitiveDateTime.isPrimitiveDateTime(this.created)) {
      result.createdDateTime = this.created.value;
      result._createdDateTime = Extension.serializePrimitiveExtension(this.created);
    }

    if (this.created && Period.isPeriod(this.created)) {
      result.createdPeriod = this.created.toJSON();
    }

    if (this.issued) {
      result.issued = this.issued.value;
      result._issued = Extension.serializePrimitiveExtension(this.issued);
    }

    if (this.operator) {
      result.operator = this.operator.toJSON();
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.bodySite) {
      result.bodySite = this.bodySite.toJSON();
    }

    if (this.deviceName) {
      result.deviceName = this.deviceName.value;
      result._deviceName = Extension.serializePrimitiveExtension(this.deviceName);
    }

    if (this.device) {
      result.device = this.device.toJSON();
    }

    if (this.height) {
      result.height = this.height.value;
      result._height = Extension.serializePrimitiveExtension(this.height);
    }

    if (this.width) {
      result.width = this.width.value;
      result._width = Extension.serializePrimitiveExtension(this.width);
    }

    if (this.frames) {
      result.frames = this.frames.value;
      result._frames = Extension.serializePrimitiveExtension(this.frames);
    }

    if (this.duration) {
      result.duration = this.duration.value;
      result._duration = Extension.serializePrimitiveExtension(this.duration);
    }

    if (this.content) {
      result.content = this.content.toJSON();
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Media {
    return Media.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Media";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
