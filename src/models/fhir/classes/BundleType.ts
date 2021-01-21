/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("BundleType", "PrimitiveCode")
export class BundleType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "BundleType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: BundleType = new BundleType()
  ): BundleType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isBundleType(input?: unknown): input is BundleType {
    const castInput = input as BundleType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BundleType";
  }

  public clone(): BundleType {
    const result = new BundleType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "BundleType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
