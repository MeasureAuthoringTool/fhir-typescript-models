/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DocumentReferenceContent,
  DocumentReferenceContext,
  DocumentReferenceRelatesTo,
  DocumentReferenceStatus,
  DomainResource,
  Extension,
  Identifier,
  IDocumentReference,
  PrimitiveInstant,
  PrimitiveString,
  Reference,
  ReferredDocumentStatus,
} from "../internal";

export class DocumentReference extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DocumentReference";

  public masterIdentifier?: Identifier;

  public identifier?: Array<Identifier>;

  public status?: DocumentReferenceStatus;

  public docStatus?: ReferredDocumentStatus;

  public type?: CodeableConcept;

  public category?: Array<CodeableConcept>;

  public subject?: Reference;

  public date?: PrimitiveInstant;

  public author?: Array<Reference>;

  public authenticator?: Reference;

  public custodian?: Reference;

  public relatesTo?: Array<DocumentReferenceRelatesTo>;

  public description?: PrimitiveString;

  public securityLabel?: Array<CodeableConcept>;

  public content?: Array<DocumentReferenceContent>;

  public context?: DocumentReferenceContext;

  public static parse(
    json: IDocumentReference,
    providedInstance: DocumentReference = new DocumentReference()
  ): DocumentReference {
    const newInstance: DocumentReference = DomainResource.parse(json, providedInstance);
  
    if (json.masterIdentifier) {
      newInstance.masterIdentifier = Identifier.parse(json.masterIdentifier);
    }
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status) {
      newInstance.status = DocumentReferenceStatus.parsePrimitive(json.status, json._status);
    }
    if (json.docStatus) {
      newInstance.docStatus = ReferredDocumentStatus.parsePrimitive(json.docStatus, json._docStatus);
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
    if (json.date) {
      newInstance.date = PrimitiveInstant.parsePrimitive(json.date, json._date);
    }
    if (json.author) {
      newInstance.author = json.author.map((x) => Reference.parse(x));
    }
    if (json.authenticator) {
      newInstance.authenticator = Reference.parse(json.authenticator);
    }
    if (json.custodian) {
      newInstance.custodian = Reference.parse(json.custodian);
    }
    if (json.relatesTo) {
      newInstance.relatesTo = json.relatesTo.map((x) => DocumentReferenceRelatesTo.parse(x));
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.securityLabel) {
      newInstance.securityLabel = json.securityLabel.map((x) => CodeableConcept.parse(x));
    }
    if (json.content) {
      newInstance.content = json.content.map((x) => DocumentReferenceContent.parse(x));
    }
    if (json.context) {
      newInstance.context = DocumentReferenceContext.parse(json.context);
    }
    return newInstance;
  }

  public static isDocumentReference(input?: unknown): input is DocumentReference {
    const castInput = input as DocumentReference;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DocumentReference";
  }

  public toJSON(): IDocumentReference {
    const result: IDocumentReference = super.toJSON();

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

    if (this.docStatus) {
      result.docStatus = this.docStatus.value;
      result._docStatus = Extension.serializePrimitiveExtension(this.docStatus);
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

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.author) {
      result.author = this.author.map((x) => x.toJSON());
    }

    if (this.authenticator) {
      result.authenticator = this.authenticator.toJSON();
    }

    if (this.custodian) {
      result.custodian = this.custodian.toJSON();
    }

    if (this.relatesTo) {
      result.relatesTo = this.relatesTo.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.securityLabel) {
      result.securityLabel = this.securityLabel.map((x) => x.toJSON());
    }

    if (this.content) {
      result.content = this.content.map((x) => x.toJSON());
    }

    if (this.context) {
      result.context = this.context.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "DocumentReference";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
