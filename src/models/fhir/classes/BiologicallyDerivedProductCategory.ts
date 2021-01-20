/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("BiologicallyDerivedProductCategory", "PrimitiveCode")
export class BiologicallyDerivedProductCategory extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "BiologicallyDerivedProductCategory";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: BiologicallyDerivedProductCategory = new BiologicallyDerivedProductCategory()
  ): BiologicallyDerivedProductCategory {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isBiologicallyDerivedProductCategory(input?: unknown): input is BiologicallyDerivedProductCategory {
    const castInput = input as BiologicallyDerivedProductCategory;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BiologicallyDerivedProductCategory";
  }

  public clone(): BiologicallyDerivedProductCategory {
    const result = new BiologicallyDerivedProductCategory();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "BiologicallyDerivedProductCategory";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
