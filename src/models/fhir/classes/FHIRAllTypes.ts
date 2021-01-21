/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("FHIRAllTypes", "PrimitiveCode")
export class FHIRAllTypes extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "FHIRAllTypes";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: FHIRAllTypes = new FHIRAllTypes()
  ): FHIRAllTypes {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isFHIRAllTypes(input?: unknown): input is FHIRAllTypes {
    const castInput = input as FHIRAllTypes;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "FHIRAllTypes";
  }

  public clone(): FHIRAllTypes {
    const result = new FHIRAllTypes();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "FHIRAllTypes";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
