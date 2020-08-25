/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  DocumentRelationshipType,
  Extension,
  IDocumentReferenceRelatesTo,
  Reference,
} from "../internal";

export class DocumentReferenceRelatesTo extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DocumentReference.RelatesTo";

  public code?: DocumentRelationshipType;

  public target?: Reference;

  public static parse(
    json: IDocumentReferenceRelatesTo,
    providedInstance: DocumentReferenceRelatesTo = new DocumentReferenceRelatesTo()
  ): DocumentReferenceRelatesTo {
    const newInstance: DocumentReferenceRelatesTo = BackboneElement.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = DocumentRelationshipType.parsePrimitive(json.code, json._code);
    }
    if (json.target) {
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
  
  public getTypeName(): string {
    return "DocumentReferenceRelatesTo";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
