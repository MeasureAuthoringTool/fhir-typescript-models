/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("DocumentReferenceStatus", "PrimitiveCode")
export class DocumentReferenceStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DocumentReferenceStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DocumentReferenceStatus = new DocumentReferenceStatus()
  ): DocumentReferenceStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDocumentReferenceStatus(input?: unknown): input is DocumentReferenceStatus {
    const castInput = input as DocumentReferenceStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DocumentReferenceStatus";
  }

  public clone(): DocumentReferenceStatus {
    const result = new DocumentReferenceStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "DocumentReferenceStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
