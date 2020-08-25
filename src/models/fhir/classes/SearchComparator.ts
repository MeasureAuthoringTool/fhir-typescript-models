/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class SearchComparator extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SearchComparator";

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
  
  public getTypeName(): string {
    return "SearchComparator";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
