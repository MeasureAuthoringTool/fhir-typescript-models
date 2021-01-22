/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("FilterOperator", "PrimitiveCode")
export class FilterOperator extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "FilterOperator";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: FilterOperator = new FilterOperator()
  ): FilterOperator {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isFilterOperator(input?: unknown): input is FilterOperator {
    const castInput = input as FilterOperator;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "FilterOperator";
  }

  public clone(): FilterOperator {
    const result = new FilterOperator();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "FilterOperator";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
