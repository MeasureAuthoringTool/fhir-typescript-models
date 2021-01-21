/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("DocumentConfidentiality", "PrimitiveCode")
export class DocumentConfidentiality extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DocumentConfidentiality";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DocumentConfidentiality = new DocumentConfidentiality()
  ): DocumentConfidentiality {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDocumentConfidentiality(input?: unknown): input is DocumentConfidentiality {
    const castInput = input as DocumentConfidentiality;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DocumentConfidentiality";
  }

  public clone(): DocumentConfidentiality {
    const result = new DocumentConfidentiality();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "DocumentConfidentiality";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
