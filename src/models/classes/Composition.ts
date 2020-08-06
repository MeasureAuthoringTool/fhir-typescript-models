/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  CompositionAttester,
  CompositionEvent,
  CompositionRelatesTo,
  CompositionSection,
  CompositionStatus,
  DocumentConfidentiality,
  DomainResource,
  Extension,
  IComposition,
  Identifier,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
} from "../internal";

export class Composition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Composition";

  public identifier?: Identifier;

  public status?: CompositionStatus;

  public type?: CodeableConcept;

  public category?: Array<CodeableConcept>;

  public subject?: Reference;

  public encounter?: Reference;

  public date?: PrimitiveDateTime;

  public author?: Array<Reference>;

  public title?: PrimitiveString;

  public confidentiality?: DocumentConfidentiality;

  public attester?: Array<CompositionAttester>;

  public custodian?: Reference;

  public relatesTo?: Array<CompositionRelatesTo>;

  public event?: Array<CompositionEvent>;

  public section?: Array<CompositionSection>;

  public static parse(
    json: IComposition,
    providedInstance: Composition = new Composition()
  ): Composition {
    const newInstance: Composition = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.status) {
      newInstance.status = CompositionStatus.parsePrimitive(json.status, json._status);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.category) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.date) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.author) {
      newInstance.author = json.author.map((x) => Reference.parse(x));
    }
    if (json.title) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.confidentiality) {
      newInstance.confidentiality = DocumentConfidentiality.parsePrimitive(json.confidentiality, json._confidentiality);
    }
    if (json.attester) {
      newInstance.attester = json.attester.map((x) => CompositionAttester.parse(x));
    }
    if (json.custodian) {
      newInstance.custodian = Reference.parse(json.custodian);
    }
    if (json.relatesTo) {
      newInstance.relatesTo = json.relatesTo.map((x) => CompositionRelatesTo.parse(x));
    }
    if (json.event) {
      newInstance.event = json.event.map((x) => CompositionEvent.parse(x));
    }
    if (json.section) {
      newInstance.section = json.section.map((x) => CompositionSection.parse(x));
    }
    return newInstance;
  }

  public static isComposition(input?: unknown): input is Composition {
    const castInput = input as Composition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Composition";
  }

  public toJSON(): IComposition {
    const result: IComposition = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.category) {
      result.category = this.category.map((x) => x.toJSON());
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.author) {
      result.author = this.author.map((x) => x.toJSON());
    }

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    if (this.confidentiality) {
      result.confidentiality = this.confidentiality.value;
      result._confidentiality = Extension.serializePrimitiveExtension(this.confidentiality);
    }

    if (this.attester) {
      result.attester = this.attester.map((x) => x.toJSON());
    }

    if (this.custodian) {
      result.custodian = this.custodian.toJSON();
    }

    if (this.relatesTo) {
      result.relatesTo = this.relatesTo.map((x) => x.toJSON());
    }

    if (this.event) {
      result.event = this.event.map((x) => x.toJSON());
    }

    if (this.section) {
      result.section = this.section.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Composition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
