/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  ISpecimen,
  PrimitiveDateTime,
  Reference,
  SpecimenCollection,
  SpecimenContainer,
  SpecimenProcessing,
  SpecimenStatus,
} from "../internal";

export class Specimen extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Specimen";

  public identifier?: Array<Identifier>;

  public accessionIdentifier?: Identifier;

  public status?: SpecimenStatus;

  public type?: CodeableConcept;

  public subject?: Reference;

  public receivedTime?: PrimitiveDateTime;

  public parent?: Array<Reference>;

  public request?: Array<Reference>;

  public collection?: SpecimenCollection;

  public processing?: Array<SpecimenProcessing>;

  public container?: Array<SpecimenContainer>;

  public condition?: Array<CodeableConcept>;

  public note?: Array<Annotation>;

  public static parse(
    json: ISpecimen,
    providedInstance: Specimen = new Specimen()
  ): Specimen {
    const newInstance: Specimen = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.accessionIdentifier) {
      newInstance.accessionIdentifier = Identifier.parse(json.accessionIdentifier);
    }
    if (json.status) {
      newInstance.status = SpecimenStatus.parsePrimitive(json.status, json._status);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.receivedTime) {
      newInstance.receivedTime = PrimitiveDateTime.parsePrimitive(json.receivedTime, json._receivedTime);
    }
    if (json.parent) {
      newInstance.parent = json.parent.map((x) => Reference.parse(x));
    }
    if (json.request) {
      newInstance.request = json.request.map((x) => Reference.parse(x));
    }
    if (json.collection) {
      newInstance.collection = SpecimenCollection.parse(json.collection);
    }
    if (json.processing) {
      newInstance.processing = json.processing.map((x) => SpecimenProcessing.parse(x));
    }
    if (json.container) {
      newInstance.container = json.container.map((x) => SpecimenContainer.parse(x));
    }
    if (json.condition) {
      newInstance.condition = json.condition.map((x) => CodeableConcept.parse(x));
    }
    if (json.note) {
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
  
  public getTypeName(): string {
    return "Specimen";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
