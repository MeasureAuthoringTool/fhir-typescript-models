/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("SearchModifierCode", "PrimitiveCode")
export class SearchModifierCode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SearchModifierCode";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SearchModifierCode = new SearchModifierCode()
  ): SearchModifierCode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSearchModifierCode(input?: unknown): input is SearchModifierCode {
    const castInput = input as SearchModifierCode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SearchModifierCode";
  }

  public clone(): SearchModifierCode {
    const result = new SearchModifierCode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "SearchModifierCode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
