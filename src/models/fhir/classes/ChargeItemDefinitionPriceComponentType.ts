/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ChargeItemDefinitionPriceComponentType", "PrimitiveCode")
export class ChargeItemDefinitionPriceComponentType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ChargeItemDefinitionPriceComponentType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ChargeItemDefinitionPriceComponentType = new ChargeItemDefinitionPriceComponentType()
  ): ChargeItemDefinitionPriceComponentType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isChargeItemDefinitionPriceComponentType(input?: unknown): input is ChargeItemDefinitionPriceComponentType {
    const castInput = input as ChargeItemDefinitionPriceComponentType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ChargeItemDefinitionPriceComponentType";
  }

  public clone(): ChargeItemDefinitionPriceComponentType {
    const result = new ChargeItemDefinitionPriceComponentType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ChargeItemDefinitionPriceComponentType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
