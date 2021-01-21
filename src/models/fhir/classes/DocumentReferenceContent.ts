/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Attachment,
  BackboneElement,
  Coding,
  FhirField,
  IDocumentReferenceContent,
  FhirType
} from "../internal";

@FhirType("DocumentReferenceContent", "BackboneElement")
export class DocumentReferenceContent extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DocumentReference.Content";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Attachment")
  public attachment?: Attachment;

  @FhirField("Coding")
  public format?: Coding;

  public static parse(
    json: IDocumentReferenceContent,
    providedInstance: DocumentReferenceContent = new DocumentReferenceContent()
  ): DocumentReferenceContent {
    const newInstance: DocumentReferenceContent = BackboneElement.parse(json, providedInstance);
  
    if (json.attachment !== undefined) {
      newInstance.attachment = Attachment.parse(json.attachment);
    }
    if (json.format !== undefined) {
      newInstance.format = Coding.parse(json.format);
    }
    return newInstance;
  }

  public static isDocumentReferenceContent(input?: unknown): input is DocumentReferenceContent {
    const castInput = input as DocumentReferenceContent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DocumentReferenceContent";
  }

  public toJSON(): IDocumentReferenceContent {
    const result: IDocumentReferenceContent = super.toJSON();

    if (this.attachment) {
      result.attachment = this.attachment.toJSON();
    }

    if (this.format) {
      result.format = this.format.toJSON();
    }

    return result;
  }

  public clone(): DocumentReferenceContent {
    return DocumentReferenceContent.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DocumentReferenceContent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
