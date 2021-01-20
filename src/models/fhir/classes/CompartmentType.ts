/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("CompartmentType", "PrimitiveCode")
export class CompartmentType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CompartmentType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CompartmentType = new CompartmentType()
  ): CompartmentType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCompartmentType(input?: unknown): input is CompartmentType {
    const castInput = input as CompartmentType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CompartmentType";
  }

  public clone(): CompartmentType {
    const result = new CompartmentType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "CompartmentType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
