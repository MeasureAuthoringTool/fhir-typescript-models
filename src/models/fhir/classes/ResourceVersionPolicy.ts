/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ResourceVersionPolicy", "PrimitiveCode")
export class ResourceVersionPolicy extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ResourceVersionPolicy";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ResourceVersionPolicy = new ResourceVersionPolicy()
  ): ResourceVersionPolicy {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isResourceVersionPolicy(input?: unknown): input is ResourceVersionPolicy {
    const castInput = input as ResourceVersionPolicy;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ResourceVersionPolicy";
  }

  public clone(): ResourceVersionPolicy {
    const result = new ResourceVersionPolicy();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ResourceVersionPolicy";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
