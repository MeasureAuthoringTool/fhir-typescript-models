/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class SearchModifierCode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SearchModifierCode";

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
  
  public getTypeName(): string {
    return "SearchModifierCode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
