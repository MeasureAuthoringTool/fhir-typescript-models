/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class Use extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Use";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: Use = new Use()
  ): Use {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isUse(input?: unknown): input is Use {
    const castInput = input as Use;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Use";
  }
  
  public getTypeName(): string {
    return "Use";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
