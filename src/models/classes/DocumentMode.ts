/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class DocumentMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DocumentMode";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DocumentMode = new DocumentMode()
  ): DocumentMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDocumentMode(input?: unknown): input is DocumentMode {
    const castInput = input as DocumentMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DocumentMode";
  }
  
  public getTypeName(): string {
    return "DocumentMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
