/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("TypeDerivationRule", "PrimitiveCode")
export class TypeDerivationRule extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TypeDerivationRule";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: TypeDerivationRule = new TypeDerivationRule()
  ): TypeDerivationRule {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isTypeDerivationRule(input?: unknown): input is TypeDerivationRule {
    const castInput = input as TypeDerivationRule;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TypeDerivationRule";
  }

  public clone(): TypeDerivationRule {
    const result = new TypeDerivationRule();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "TypeDerivationRule";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
