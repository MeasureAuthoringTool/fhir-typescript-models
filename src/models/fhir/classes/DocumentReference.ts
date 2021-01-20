/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DocumentReferenceContent,
  DocumentReferenceContext,
  DocumentReferenceRelatesTo,
  DocumentReferenceStatus,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IDocumentReference,
  PrimitiveInstant,
  PrimitiveString,
  Reference,
  ReferredDocumentStatus,
  FhirType
} from "../internal";

@FhirType("DocumentReference", "DomainResource")
export class DocumentReference extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DocumentReference";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Identifier")
  public masterIdentifier?: Identifier;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("DocumentReferenceStatus")
  public status?: DocumentReferenceStatus;

  @FhirField("ReferredDocumentStatus")
  public docStatus?: ReferredDocumentStatus;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirList("CodeableConcept")
  public category?: Array<CodeableConcept>;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("PrimitiveInstant")
  public date?: PrimitiveInstant;

  @FhirList("Reference")
  public author?: Array<Reference>;

  @FhirField("Reference")
  public authenticator?: Reference;

  @FhirField("Reference")
  public custodian?: Reference;

  @FhirList("DocumentReferenceRelatesTo")
  public relatesTo?: Array<DocumentReferenceRelatesTo>;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirList("CodeableConcept")
  public securityLabel?: Array<CodeableConcept>;

  @FhirList("DocumentReferenceContent")
  public content?: Array<DocumentReferenceContent>;

  @FhirField("DocumentReferenceContext")
  public context?: DocumentReferenceContext;

  public static parse(
    json: IDocumentReference,
    providedInstance: DocumentReference = new DocumentReference()
  ): DocumentReference {
    const newInstance: DocumentReference = DomainResource.parse(json, providedInstance);
  
    if (json.masterIdentifier !== undefined) {
      newInstance.masterIdentifier = Identifier.parse(json.masterIdentifier);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = DocumentReferenceStatus.parsePrimitive(json.status, json._status);
    }
    if (json.docStatus !== undefined) {
      newInstance.docStatus = ReferredDocumentStatus.parsePrimitive(json.docStatus, json._docStatus);
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
    if (json.date !== undefined) {
      newInstance.date = PrimitiveInstant.parsePrimitive(json.date, json._date);
    }
    if (json.author !== undefined) {
      newInstance.author = json.author.map((x) => Reference.parse(x));
    }
    if (json.authenticator !== undefined) {
      newInstance.authenticator = Reference.parse(json.authenticator);
    }
    if (json.custodian !== undefined) {
      newInstance.custodian = Reference.parse(json.custodian);
    }
    if (json.relatesTo !== undefined) {
      newInstance.relatesTo = json.relatesTo.map((x) => DocumentReferenceRelatesTo.parse(x));
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.securityLabel !== undefined) {
      newInstance.securityLabel = json.securityLabel.map((x) => CodeableConcept.parse(x));
    }
    if (json.content !== undefined) {
      newInstance.content = json.content.map((x) => DocumentReferenceContent.parse(x));
    }
    if (json.context !== undefined) {
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

  public clone(): DocumentReference {
    return DocumentReference.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DocumentReference";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
