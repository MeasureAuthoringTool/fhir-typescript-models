/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("FHIRVersion", "PrimitiveCode")
export class FHIRVersion extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "FHIRVersion";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: FHIRVersion = new FHIRVersion()
  ): FHIRVersion {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isFHIRVersion(input?: unknown): input is FHIRVersion {
    const castInput = input as FHIRVersion;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "FHIRVersion";
  }

  public clone(): FHIRVersion {
    const result = new FHIRVersion();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "FHIRVersion";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
