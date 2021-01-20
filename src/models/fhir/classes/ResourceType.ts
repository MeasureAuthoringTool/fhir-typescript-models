/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ResourceType", "PrimitiveCode")
export class ResourceType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ResourceType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ResourceType = new ResourceType()
  ): ResourceType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isResourceType(input?: unknown): input is ResourceType {
    const castInput = input as ResourceType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ResourceType";
  }

  public clone(): ResourceType {
    const result = new ResourceType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ResourceType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
