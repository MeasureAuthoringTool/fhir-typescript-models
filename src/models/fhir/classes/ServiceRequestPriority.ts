/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ServiceRequestPriority extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ServiceRequestPriority";

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
  
  public getTypeName(): string {
    return "ServiceRequestPriority";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
