/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ReferredDocumentStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ReferredDocumentStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ReferredDocumentStatus = new ReferredDocumentStatus()
  ): ReferredDocumentStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isReferredDocumentStatus(input?: unknown): input is ReferredDocumentStatus {
    const castInput = input as ReferredDocumentStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ReferredDocumentStatus";
  }
  
  public getTypeName(): string {
    return "ReferredDocumentStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
