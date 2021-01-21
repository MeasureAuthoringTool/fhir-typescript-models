/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  ISpecimen,
  PrimitiveDateTime,
  Reference,
  SpecimenCollection,
  SpecimenContainer,
  SpecimenProcessing,
  SpecimenStatus,
  FhirType
} from "../internal";

@FhirType("Specimen", "DomainResource")
export class Specimen extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Specimen";

  static readonly primaryCodePath: string | null = "type";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("Identifier")
  public accessionIdentifier?: Identifier;

  @FhirField("SpecimenStatus")
  public status?: SpecimenStatus;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("PrimitiveDateTime")
  public receivedTime?: PrimitiveDateTime;

  @FhirList("Reference")
  public parent?: Array<Reference>;

  @FhirList("Reference")
  public request?: Array<Reference>;

  @FhirField("SpecimenCollection")
  public collection?: SpecimenCollection;

  @FhirList("SpecimenProcessing")
  public processing?: Array<SpecimenProcessing>;

  @FhirList("SpecimenContainer")
  public container?: Array<SpecimenContainer>;

  @FhirList("CodeableConcept")
  public condition?: Array<CodeableConcept>;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.type;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.type = primaryCode;
  }

  public static parse(
    json: ISpecimen,
    providedInstance: Specimen = new Specimen()
  ): Specimen {
    const newInstance: Specimen = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.accessionIdentifier !== undefined) {
      newInstance.accessionIdentifier = Identifier.parse(json.accessionIdentifier);
    }
    if (json.status !== undefined) {
      newInstance.status = SpecimenStatus.parsePrimitive(json.status, json._status);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.receivedTime !== undefined) {
      newInstance.receivedTime = PrimitiveDateTime.parsePrimitive(json.receivedTime, json._receivedTime);
    }
    if (json.parent !== undefined) {
      newInstance.parent = json.parent.map((x) => Reference.parse(x));
    }
    if (json.request !== undefined) {
      newInstance.request = json.request.map((x) => Reference.parse(x));
    }
    if (json.collection !== undefined) {
      newInstance.collection = SpecimenCollection.parse(json.collection);
    }
    if (json.processing !== undefined) {
      newInstance.processing = json.processing.map((x) => SpecimenProcessing.parse(x));
    }
    if (json.container !== undefined) {
      newInstance.container = json.container.map((x) => SpecimenContainer.parse(x));
    }
    if (json.condition !== undefined) {
      newInstance.condition = json.condition.map((x) => CodeableConcept.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isSpecimen(input?: unknown): input is Specimen {
    const castInput = input as Specimen;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Specimen";
  }

  public toJSON(): ISpecimen {
    const result: ISpecimen = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.accessionIdentifier) {
      result.accessionIdentifier = this.accessionIdentifier.toJSON();
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.receivedTime) {
      result.receivedTime = this.receivedTime.value;
      result._receivedTime = Extension.serializePrimitiveExtension(this.receivedTime);
    }

    if (this.parent) {
      result.parent = this.parent.map((x) => x.toJSON());
    }

    if (this.request) {
      result.request = this.request.map((x) => x.toJSON());
    }

    if (this.collection) {
      result.collection = this.collection.toJSON();
    }

    if (this.processing) {
      result.processing = this.processing.map((x) => x.toJSON());
    }

    if (this.container) {
      result.container = this.container.map((x) => x.toJSON());
    }

    if (this.condition) {
      result.condition = this.condition.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Specimen {
    return Specimen.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Specimen";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
