/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("RequestIntent", "PrimitiveCode")
export class RequestIntent extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RequestIntent";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: RequestIntent = new RequestIntent()
  ): RequestIntent {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isRequestIntent(input?: unknown): input is RequestIntent {
    const castInput = input as RequestIntent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RequestIntent";
  }

  public clone(): RequestIntent {
    const result = new RequestIntent();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "RequestIntent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
