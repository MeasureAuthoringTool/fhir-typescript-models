/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ServiceRequestStatus", "PrimitiveCode")
export class ServiceRequestStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ServiceRequestStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ServiceRequestStatus = new ServiceRequestStatus()
  ): ServiceRequestStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isServiceRequestStatus(input?: unknown): input is ServiceRequestStatus {
    const castInput = input as ServiceRequestStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ServiceRequestStatus";
  }

  public clone(): ServiceRequestStatus {
    const result = new ServiceRequestStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ServiceRequestStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
