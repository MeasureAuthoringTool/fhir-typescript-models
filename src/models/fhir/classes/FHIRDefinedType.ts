/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("FHIRDefinedType", "PrimitiveCode")
export class FHIRDefinedType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "FHIRDefinedType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: FHIRDefinedType = new FHIRDefinedType()
  ): FHIRDefinedType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isFHIRDefinedType(input?: unknown): input is FHIRDefinedType {
    const castInput = input as FHIRDefinedType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "FHIRDefinedType";
  }

  public clone(): FHIRDefinedType {
    const result = new FHIRDefinedType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "FHIRDefinedType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
