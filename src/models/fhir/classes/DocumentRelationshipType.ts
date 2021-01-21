/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("DocumentRelationshipType", "PrimitiveCode")
export class DocumentRelationshipType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DocumentRelationshipType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DocumentRelationshipType = new DocumentRelationshipType()
  ): DocumentRelationshipType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDocumentRelationshipType(input?: unknown): input is DocumentRelationshipType {
    const castInput = input as DocumentRelationshipType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DocumentRelationshipType";
  }

  public clone(): DocumentRelationshipType {
    const result = new DocumentRelationshipType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "DocumentRelationshipType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
