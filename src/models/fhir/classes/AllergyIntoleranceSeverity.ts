/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("AllergyIntoleranceSeverity", "PrimitiveCode")
export class AllergyIntoleranceSeverity extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AllergyIntoleranceSeverity";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: AllergyIntoleranceSeverity = new AllergyIntoleranceSeverity()
  ): AllergyIntoleranceSeverity {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isAllergyIntoleranceSeverity(input?: unknown): input is AllergyIntoleranceSeverity {
    const castInput = input as AllergyIntoleranceSeverity;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AllergyIntoleranceSeverity";
  }

  public clone(): AllergyIntoleranceSeverity {
    const result = new AllergyIntoleranceSeverity();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "AllergyIntoleranceSeverity";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
