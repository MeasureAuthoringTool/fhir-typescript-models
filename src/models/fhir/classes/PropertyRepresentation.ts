/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("PropertyRepresentation", "PrimitiveCode")
export class PropertyRepresentation extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PropertyRepresentation";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: PropertyRepresentation = new PropertyRepresentation()
  ): PropertyRepresentation {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isPropertyRepresentation(input?: unknown): input is PropertyRepresentation {
    const castInput = input as PropertyRepresentation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PropertyRepresentation";
  }

  public clone(): PropertyRepresentation {
    const result = new PropertyRepresentation();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PropertyRepresentation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
