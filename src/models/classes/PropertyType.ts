/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class PropertyType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PropertyType";

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
  
  public getTypeName(): string {
    return "PropertyType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
