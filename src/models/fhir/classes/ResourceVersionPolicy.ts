/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ResourceVersionPolicy extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ResourceVersionPolicy";

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
  
  public getTypeName(): string {
    return "ResourceVersionPolicy";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
