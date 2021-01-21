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
  FhirField,
  FhirList,
  IComposition,
  Identifier,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("Composition", "DomainResource")
export class Composition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Composition";

  static readonly primaryCodePath: string | null = "type";

  @FhirField("Identifier")
  public identifier?: Identifier;

  @FhirField("CompositionStatus")
  public status?: CompositionStatus;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirList("CodeableConcept")
  public category?: Array<CodeableConcept>;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("Reference")
  public encounter?: Reference;

  @FhirField("PrimitiveDateTime")
  public date?: PrimitiveDateTime;

  @FhirList("Reference")
  public author?: Array<Reference>;

  @FhirField("PrimitiveString")
  public title?: PrimitiveString;

  @FhirField("DocumentConfidentiality")
  public confidentiality?: DocumentConfidentiality;

  @FhirList("CompositionAttester")
  public attester?: Array<CompositionAttester>;

  @FhirField("Reference")
  public custodian?: Reference;

  @FhirList("CompositionRelatesTo")
  public relatesTo?: Array<CompositionRelatesTo>;

  @FhirList("CompositionEvent")
  public event?: Array<CompositionEvent>;

  @FhirList("CompositionSection")
  public section?: Array<CompositionSection>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.type;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.type = primaryCode;
  }

  public static parse(
    json: IComposition,
    providedInstance: Composition = new Composition()
  ): Composition {
    const newInstance: Composition = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.status !== undefined) {
      newInstance.status = CompositionStatus.parsePrimitive(json.status, json._status);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.author !== undefined) {
      newInstance.author = json.author.map((x) => Reference.parse(x));
    }
    if (json.title !== undefined) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.confidentiality !== undefined) {
      newInstance.confidentiality = DocumentConfidentiality.parsePrimitive(json.confidentiality, json._confidentiality);
    }
    if (json.attester !== undefined) {
      newInstance.attester = json.attester.map((x) => CompositionAttester.parse(x));
    }
    if (json.custodian !== undefined) {
      newInstance.custodian = Reference.parse(json.custodian);
    }
    if (json.relatesTo !== undefined) {
      newInstance.relatesTo = json.relatesTo.map((x) => CompositionRelatesTo.parse(x));
    }
    if (json.event !== undefined) {
      newInstance.event = json.event.map((x) => CompositionEvent.parse(x));
    }
    if (json.section !== undefined) {
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

  public clone(): Composition {
    return Composition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Composition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
