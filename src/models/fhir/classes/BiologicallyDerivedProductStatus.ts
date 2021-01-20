/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("BiologicallyDerivedProductStatus", "PrimitiveCode")
export class BiologicallyDerivedProductStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "BiologicallyDerivedProductStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: BiologicallyDerivedProductStatus = new BiologicallyDerivedProductStatus()
  ): BiologicallyDerivedProductStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isBiologicallyDerivedProductStatus(input?: unknown): input is BiologicallyDerivedProductStatus {
    const castInput = input as BiologicallyDerivedProductStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BiologicallyDerivedProductStatus";
  }

  public clone(): BiologicallyDerivedProductStatus {
    const result = new BiologicallyDerivedProductStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "BiologicallyDerivedProductStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
