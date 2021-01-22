/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("EndpointStatus", "PrimitiveCode")
export class EndpointStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EndpointStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EndpointStatus = new EndpointStatus()
  ): EndpointStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEndpointStatus(input?: unknown): input is EndpointStatus {
    const castInput = input as EndpointStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EndpointStatus";
  }

  public clone(): EndpointStatus {
    const result = new EndpointStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "EndpointStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
