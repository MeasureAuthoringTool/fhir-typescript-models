/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ParameterUse extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ParameterUse";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ParameterUse = new ParameterUse()
  ): ParameterUse {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isParameterUse(input?: unknown): input is ParameterUse {
    const castInput = input as ParameterUse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ParameterUse";
  }
  
  public getTypeName(): string {
    return "ParameterUse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
