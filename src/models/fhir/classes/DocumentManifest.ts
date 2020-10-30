/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DocumentManifestRelated,
  DocumentReferenceStatus,
  DomainResource,
  Extension,
  Identifier,
  IDocumentManifest,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUri,
  Reference,
  FieldMetadata
} from "../internal";

export class DocumentManifest extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DocumentManifest";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "masterIdentifier",
      fieldType: [Identifier],
      isArray: false
    }, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [DocumentReferenceStatus],
      isArray: false
    }, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "subject",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "created",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "author",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "recipient",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "source",
      fieldType: [PrimitiveUri],
      isArray: false
    }, {
      fieldName: "description",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "content",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "related",
      fieldType: [DocumentManifestRelated],
      isArray: true
    }];
  }

  public masterIdentifier?: Identifier;

  public identifier?: Array<Identifier>;

  public status?: DocumentReferenceStatus;

  public type?: CodeableConcept;

  public subject?: Reference;

  public created?: PrimitiveDateTime;

  public author?: Array<Reference>;

  public recipient?: Array<Reference>;

  public source?: PrimitiveUri;

  public description?: PrimitiveString;

  public content?: Array<Reference>;

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
