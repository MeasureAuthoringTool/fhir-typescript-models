/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("CommunicationRequestStatus", "PrimitiveCode")
export class CommunicationRequestStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CommunicationRequestStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CommunicationRequestStatus = new CommunicationRequestStatus()
  ): CommunicationRequestStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCommunicationRequestStatus(input?: unknown): input is CommunicationRequestStatus {
    const castInput = input as CommunicationRequestStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CommunicationRequestStatus";
  }

  public clone(): CommunicationRequestStatus {
    const result = new CommunicationRequestStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "CommunicationRequestStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
