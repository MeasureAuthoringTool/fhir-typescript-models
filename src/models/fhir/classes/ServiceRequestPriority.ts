/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ServiceRequestPriority", "PrimitiveCode")
export class ServiceRequestPriority extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ServiceRequestPriority";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ServiceRequestPriority = new ServiceRequestPriority()
  ): ServiceRequestPriority {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isServiceRequestPriority(input?: unknown): input is ServiceRequestPriority {
    const castInput = input as ServiceRequestPriority;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ServiceRequestPriority";
  }

  public clone(): ServiceRequestPriority {
    const result = new ServiceRequestPriority();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ServiceRequestPriority";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
