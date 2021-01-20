/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("PropertyType", "PrimitiveCode")
export class PropertyType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PropertyType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: PropertyType = new PropertyType()
  ): PropertyType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isPropertyType(input?: unknown): input is PropertyType {
    const castInput = input as PropertyType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PropertyType";
  }

  public clone(): PropertyType {
    const result = new PropertyType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PropertyType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
