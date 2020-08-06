/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class IdentifierUse extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "IdentifierUse";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: IdentifierUse = new IdentifierUse()
  ): IdentifierUse {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isIdentifierUse(input?: unknown): input is IdentifierUse {
    const castInput = input as IdentifierUse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "IdentifierUse";
  }
  
  public getTypeName(): string {
    return "IdentifierUse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
