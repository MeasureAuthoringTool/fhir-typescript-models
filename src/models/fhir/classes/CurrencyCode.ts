/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class CurrencyCode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CurrencyCode";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CurrencyCode = new CurrencyCode()
  ): CurrencyCode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCurrencyCode(input?: unknown): input is CurrencyCode {
    const castInput = input as CurrencyCode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CurrencyCode";
  }
  
  public getTypeName(): string {
    return "CurrencyCode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
