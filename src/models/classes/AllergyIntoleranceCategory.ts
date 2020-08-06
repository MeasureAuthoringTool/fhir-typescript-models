/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class AllergyIntoleranceCategory extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AllergyIntoleranceCategory";

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
  
  public getTypeName(): string {
    return "AllergyIntoleranceCategory";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
