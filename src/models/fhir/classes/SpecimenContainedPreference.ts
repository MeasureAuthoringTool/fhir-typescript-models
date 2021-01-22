/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("SpecimenContainedPreference", "PrimitiveCode")
export class SpecimenContainedPreference extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SpecimenContainedPreference";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SpecimenContainedPreference = new SpecimenContainedPreference()
  ): SpecimenContainedPreference {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSpecimenContainedPreference(input?: unknown): input is SpecimenContainedPreference {
    const castInput = input as SpecimenContainedPreference;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SpecimenContainedPreference";
  }

  public clone(): SpecimenContainedPreference {
    const result = new SpecimenContainedPreference();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "SpecimenContainedPreference";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
