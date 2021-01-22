/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("AllergyIntoleranceCriticality", "PrimitiveCode")
export class AllergyIntoleranceCriticality extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AllergyIntoleranceCriticality";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: AllergyIntoleranceCriticality = new AllergyIntoleranceCriticality()
  ): AllergyIntoleranceCriticality {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isAllergyIntoleranceCriticality(input?: unknown): input is AllergyIntoleranceCriticality {
    const castInput = input as AllergyIntoleranceCriticality;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AllergyIntoleranceCriticality";
  }

  public clone(): AllergyIntoleranceCriticality {
    const result = new AllergyIntoleranceCriticality();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "AllergyIntoleranceCriticality";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
