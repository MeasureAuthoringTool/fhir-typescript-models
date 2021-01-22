/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Attachment,
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  IBodyStructure,
  Identifier,
  PrimitiveBoolean,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("BodyStructure", "DomainResource")
export class BodyStructure extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "BodyStructure";

  static readonly primaryCodePath: string | null = "location";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("PrimitiveBoolean")
  public active?: PrimitiveBoolean;

  @FhirField("CodeableConcept")
  public morphology?: CodeableConcept;

  @FhirField("CodeableConcept")
  public location?: CodeableConcept;

  @FhirList("CodeableConcept")
  public locationQualifier?: Array<CodeableConcept>;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirList("Attachment")
  public image?: Array<Attachment>;

  @FhirField("Reference")
  public patient?: Reference;

  get primaryCode(): CodeableConcept | undefined {
    return this?.location;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.location = primaryCode;
  }

  public static parse(
    json: IBodyStructure,
    providedInstance: BodyStructure = new BodyStructure()
  ): BodyStructure {
    const newInstance: BodyStructure = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.active !== undefined) {
      newInstance.active = PrimitiveBoolean.parsePrimitive(json.active, json._active);
    }
    if (json.morphology !== undefined) {
      newInstance.morphology = CodeableConcept.parse(json.morphology);
    }
    if (json.location !== undefined) {
      newInstance.location = CodeableConcept.parse(json.location);
    }
    if (json.locationQualifier !== undefined) {
      newInstance.locationQualifier = json.locationQualifier.map((x) => CodeableConcept.parse(x));
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.image !== undefined) {
      newInstance.image = json.image.map((x) => Attachment.parse(x));
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    return newInstance;
  }

  public static isBodyStructure(input?: unknown): input is BodyStructure {
    const castInput = input as BodyStructure;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BodyStructure";
  }

  public toJSON(): IBodyStructure {
    const result: IBodyStructure = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.active) {
      result.active = this.active.value;
      result._active = Extension.serializePrimitiveExtension(this.active);
    }

    if (this.morphology) {
      result.morphology = this.morphology.toJSON();
    }

    if (this.location) {
      result.location = this.location.toJSON();
    }

    if (this.locationQualifier) {
      result.locationQualifier = this.locationQualifier.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.image) {
      result.image = this.image.map((x) => x.toJSON());
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    return result;
  }

  public clone(): BodyStructure {
    return BodyStructure.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "BodyStructure";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
