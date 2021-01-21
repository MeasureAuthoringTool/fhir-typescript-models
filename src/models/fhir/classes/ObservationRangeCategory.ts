/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ObservationRangeCategory", "PrimitiveCode")
export class ObservationRangeCategory extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ObservationRangeCategory";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ObservationRangeCategory = new ObservationRangeCategory()
  ): ObservationRangeCategory {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isObservationRangeCategory(input?: unknown): input is ObservationRangeCategory {
    const castInput = input as ObservationRangeCategory;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ObservationRangeCategory";
  }

  public clone(): ObservationRangeCategory {
    const result = new ObservationRangeCategory();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ObservationRangeCategory";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
