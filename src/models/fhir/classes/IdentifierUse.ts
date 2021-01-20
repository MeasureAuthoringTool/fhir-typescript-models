/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("IdentifierUse", "PrimitiveCode")
export class IdentifierUse extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "IdentifierUse";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): IdentifierUse {
    const result = new IdentifierUse();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "IdentifierUse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
