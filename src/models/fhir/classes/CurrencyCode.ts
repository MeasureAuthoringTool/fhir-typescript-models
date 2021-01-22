/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("CurrencyCode", "PrimitiveCode")
export class CurrencyCode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CurrencyCode";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): CurrencyCode {
    const result = new CurrencyCode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "CurrencyCode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
