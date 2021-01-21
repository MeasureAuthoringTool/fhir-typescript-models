/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IBundleEntrySearch,
  PrimitiveDecimal,
  SearchEntryMode,
  FhirType
} from "../internal";

@FhirType("BundleEntrySearch", "BackboneElement")
export class BundleEntrySearch extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Bundle.Entry.Search";

  static readonly primaryCodePath: string | null = null;

  @FhirField("SearchEntryMode")
  public mode?: SearchEntryMode;

  @FhirField("PrimitiveDecimal")
  public score?: PrimitiveDecimal;

  public static parse(
    json: IBundleEntrySearch,
    providedInstance: BundleEntrySearch = new BundleEntrySearch()
  ): BundleEntrySearch {
    const newInstance: BundleEntrySearch = BackboneElement.parse(json, providedInstance);
  
    if (json.mode !== undefined) {
      newInstance.mode = SearchEntryMode.parsePrimitive(json.mode, json._mode);
    }
    if (json.score !== undefined) {
      newInstance.score = PrimitiveDecimal.parsePrimitive(json.score, json._score);
    }
    return newInstance;
  }

  public static isBundleEntrySearch(input?: unknown): input is BundleEntrySearch {
    const castInput = input as BundleEntrySearch;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BundleEntrySearch";
  }

  public toJSON(): IBundleEntrySearch {
    const result: IBundleEntrySearch = super.toJSON();

    if (this.mode) {
      result.mode = this.mode.value;
      result._mode = Extension.serializePrimitiveExtension(this.mode);
    }

    if (this.score) {
      result.score = this.score.value;
      result._score = Extension.serializePrimitiveExtension(this.score);
    }

    return result;
  }

  public clone(): BundleEntrySearch {
    return BundleEntrySearch.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "BundleEntrySearch";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
