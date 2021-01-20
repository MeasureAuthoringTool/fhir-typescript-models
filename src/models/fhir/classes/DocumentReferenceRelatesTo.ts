/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  DocumentRelationshipType,
  Extension,
  FhirField,
  IDocumentReferenceRelatesTo,
  Reference,
  FhirType
} from "../internal";

@FhirType("DocumentReferenceRelatesTo", "BackboneElement")
export class DocumentReferenceRelatesTo extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DocumentReference.RelatesTo";

  static readonly primaryCodePath: string | null = null;

  @FhirField("DocumentRelationshipType")
  public code?: DocumentRelationshipType;

  @FhirField("Reference")
  public target?: Reference;

  public static parse(
    json: IDocumentReferenceRelatesTo,
    providedInstance: DocumentReferenceRelatesTo = new DocumentReferenceRelatesTo()
  ): DocumentReferenceRelatesTo {
    const newInstance: DocumentReferenceRelatesTo = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = DocumentRelationshipType.parsePrimitive(json.code, json._code);
    }
    if (json.target !== undefined) {
      newInstance.target = Reference.parse(json.target);
    }
    return newInstance;
  }

  public static isDocumentReferenceRelatesTo(input?: unknown): input is DocumentReferenceRelatesTo {
    const castInput = input as DocumentReferenceRelatesTo;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DocumentReferenceRelatesTo";
  }

  public toJSON(): IDocumentReferenceRelatesTo {
    const result: IDocumentReferenceRelatesTo = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.target) {
      result.target = this.target.toJSON();
    }

    return result;
  }

  public clone(): DocumentReferenceRelatesTo {
    return DocumentReferenceRelatesTo.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DocumentReferenceRelatesTo";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
