/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("CommunicationStatus", "PrimitiveCode")
export class CommunicationStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CommunicationStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CommunicationStatus = new CommunicationStatus()
  ): CommunicationStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCommunicationStatus(input?: unknown): input is CommunicationStatus {
    const castInput = input as CommunicationStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CommunicationStatus";
  }

  public clone(): CommunicationStatus {
    const result = new CommunicationStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "CommunicationStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
