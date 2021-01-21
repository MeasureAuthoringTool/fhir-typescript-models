/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("SearchComparator", "PrimitiveCode")
export class SearchComparator extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SearchComparator";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SearchComparator = new SearchComparator()
  ): SearchComparator {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSearchComparator(input?: unknown): input is SearchComparator {
    const castInput = input as SearchComparator;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SearchComparator";
  }

  public clone(): SearchComparator {
    const result = new SearchComparator();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "SearchComparator";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
