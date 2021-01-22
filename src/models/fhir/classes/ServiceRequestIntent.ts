/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ServiceRequestIntent", "PrimitiveCode")
export class ServiceRequestIntent extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ServiceRequestIntent";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ServiceRequestIntent = new ServiceRequestIntent()
  ): ServiceRequestIntent {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isServiceRequestIntent(input?: unknown): input is ServiceRequestIntent {
    const castInput = input as ServiceRequestIntent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ServiceRequestIntent";
  }

  public clone(): ServiceRequestIntent {
    const result = new ServiceRequestIntent();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ServiceRequestIntent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
