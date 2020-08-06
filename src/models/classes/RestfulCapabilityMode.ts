/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class RestfulCapabilityMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RestfulCapabilityMode";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: RestfulCapabilityMode = new RestfulCapabilityMode()
  ): RestfulCapabilityMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isRestfulCapabilityMode(input?: unknown): input is RestfulCapabilityMode {
    const castInput = input as RestfulCapabilityMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RestfulCapabilityMode";
  }
  
  public getTypeName(): string {
    return "RestfulCapabilityMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
