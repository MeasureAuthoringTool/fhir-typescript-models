/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("RequestPriority", "PrimitiveCode")
export class RequestPriority extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RequestPriority";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: RequestPriority = new RequestPriority()
  ): RequestPriority {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isRequestPriority(input?: unknown): input is RequestPriority {
    const castInput = input as RequestPriority;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RequestPriority";
  }

  public clone(): RequestPriority {
    const result = new RequestPriority();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "RequestPriority";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
