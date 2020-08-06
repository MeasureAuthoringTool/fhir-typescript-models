/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class SearchParamType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SearchParamType";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SearchParamType = new SearchParamType()
  ): SearchParamType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSearchParamType(input?: unknown): input is SearchParamType {
    const castInput = input as SearchParamType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SearchParamType";
  }
  
  public getTypeName(): string {
    return "SearchParamType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
