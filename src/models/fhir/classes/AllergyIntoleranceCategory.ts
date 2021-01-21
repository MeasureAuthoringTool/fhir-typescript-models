/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("AllergyIntoleranceCategory", "PrimitiveCode")
export class AllergyIntoleranceCategory extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AllergyIntoleranceCategory";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: AllergyIntoleranceCategory = new AllergyIntoleranceCategory()
  ): AllergyIntoleranceCategory {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isAllergyIntoleranceCategory(input?: unknown): input is AllergyIntoleranceCategory {
    const castInput = input as AllergyIntoleranceCategory;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AllergyIntoleranceCategory";
  }

  public clone(): AllergyIntoleranceCategory {
    const result = new AllergyIntoleranceCategory();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "AllergyIntoleranceCategory";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
