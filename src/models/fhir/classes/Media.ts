/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  Attachment,
  CodeableConcept,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
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
  FhirType
} from "../internal";

@FhirType("Media", "DomainResource")
export class Media extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Media";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirList("Reference")
  public basedOn?: Array<Reference>;

  @FhirList("Reference")
  public partOf?: Array<Reference>;

  @FhirField("MediaStatus")
  public status?: MediaStatus;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("CodeableConcept")
  public modality?: CodeableConcept;

  @FhirField("CodeableConcept")
  public view?: CodeableConcept;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("Reference")
  public encounter?: Reference;

  @FhirChoice("PrimitiveDateTime", "Period")
  public created?: PrimitiveDateTime | Period;

  @FhirField("PrimitiveInstant")
  public issued?: PrimitiveInstant;

  @FhirField("Reference")
  public operator?: Reference;

  @FhirList("CodeableConcept")
  public reasonCode?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public bodySite?: CodeableConcept;

  @FhirField("PrimitiveString")
  public deviceName?: PrimitiveString;

  @FhirField("Reference")
  public device?: Reference;

  @FhirField("PrimitivePositiveInt")
  public height?: PrimitivePositiveInt;

  @FhirField("PrimitivePositiveInt")
  public width?: PrimitivePositiveInt;

  @FhirField("PrimitivePositiveInt")
  public frames?: PrimitivePositiveInt;

  @FhirField("PrimitiveDecimal")
  public duration?: PrimitiveDecimal;

  @FhirField("Attachment")
  public content?: Attachment;

  @FhirList("Annotation")
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
