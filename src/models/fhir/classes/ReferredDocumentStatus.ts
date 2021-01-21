/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ReferredDocumentStatus", "PrimitiveCode")
export class ReferredDocumentStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ReferredDocumentStatus";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): ReferredDocumentStatus {
    const result = new ReferredDocumentStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ReferredDocumentStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
