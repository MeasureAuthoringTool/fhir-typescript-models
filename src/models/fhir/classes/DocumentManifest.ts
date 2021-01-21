/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DocumentManifestRelated,
  DocumentReferenceStatus,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IDocumentManifest,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUri,
  Reference,
  FhirType
} from "../internal";

@FhirType("DocumentManifest", "DomainResource")
export class DocumentManifest extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DocumentManifest";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Identifier")
  public masterIdentifier?: Identifier;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("DocumentReferenceStatus")
  public status?: DocumentReferenceStatus;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("PrimitiveDateTime")
  public created?: PrimitiveDateTime;

  @FhirList("Reference")
  public author?: Array<Reference>;

  @FhirList("Reference")
  public recipient?: Array<Reference>;

  @FhirField("PrimitiveUri")
  public source?: PrimitiveUri;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirList("Reference")
  public content?: Array<Reference>;

  @FhirList("DocumentManifestRelated")
  public related?: Array<DocumentManifestRelated>;

  public static parse(
    json: IDocumentManifest,
    providedInstance: DocumentManifest = new DocumentManifest()
  ): DocumentManifest {
    const newInstance: DocumentManifest = DomainResource.parse(json, providedInstance);
  
    if (json.masterIdentifier !== undefined) {
      newInstance.masterIdentifier = Identifier.parse(json.masterIdentifier);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = DocumentReferenceStatus.parsePrimitive(json.status, json._status);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.created !== undefined) {
      newInstance.created = PrimitiveDateTime.parsePrimitive(json.created, json._created);
    }
    if (json.author !== undefined) {
      newInstance.author = json.author.map((x) => Reference.parse(x));
    }
    if (json.recipient !== undefined) {
      newInstance.recipient = json.recipient.map((x) => Reference.parse(x));
    }
    if (json.source !== undefined) {
      newInstance.source = PrimitiveUri.parsePrimitive(json.source, json._source);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.content !== undefined) {
      newInstance.content = json.content.map((x) => Reference.parse(x));
    }
    if (json.related !== undefined) {
      newInstance.related = json.related.map((x) => DocumentManifestRelated.parse(x));
    }
    return newInstance;
  }

  public static isDocumentManifest(input?: unknown): input is DocumentManifest {
    const castInput = input as DocumentManifest;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DocumentManifest";
  }

  public toJSON(): IDocumentManifest {
    const result: IDocumentManifest = super.toJSON();

    if (this.masterIdentifier) {
      result.masterIdentifier = this.masterIdentifier.toJSON();
    }

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
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

    if (this.created) {
      result.created = this.created.value;
      result._created = Extension.serializePrimitiveExtension(this.created);
    }

    if (this.author) {
      result.author = this.author.map((x) => x.toJSON());
    }

    if (this.recipient) {
      result.recipient = this.recipient.map((x) => x.toJSON());
    }

    if (this.source) {
      result.source = this.source.value;
      result._source = Extension.serializePrimitiveExtension(this.source);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.content) {
      result.content = this.content.map((x) => x.toJSON());
    }

    if (this.related) {
      result.related = this.related.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): DocumentManifest {
    return DocumentManifest.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DocumentManifest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
