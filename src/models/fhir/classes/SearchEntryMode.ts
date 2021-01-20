/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("SearchEntryMode", "PrimitiveCode")
export class SearchEntryMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SearchEntryMode";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SearchEntryMode = new SearchEntryMode()
  ): SearchEntryMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSearchEntryMode(input?: unknown): input is SearchEntryMode {
    const castInput = input as SearchEntryMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SearchEntryMode";
  }

  public clone(): SearchEntryMode {
    const result = new SearchEntryMode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "SearchEntryMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
