/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  BundleEntryRequest,
  BundleEntryResponse,
  BundleEntrySearch,
  BundleLink,
  Extension,
  FhirField,
  FhirList,
  IBundleEntry,
  PrimitiveUri,
  Resource,
  FhirType
} from "../internal";

@FhirType("BundleEntry", "BackboneElement")
export class BundleEntry extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Bundle.Entry";

  static readonly primaryCodePath: string | null = null;

  @FhirList("BundleLink")
  public link?: Array<BundleLink>;

  @FhirField("PrimitiveUri")
  public fullUrl?: PrimitiveUri;

  @FhirField("Resource")
  public resource?: Resource;

  @FhirField("BundleEntrySearch")
  public search?: BundleEntrySearch;

  @FhirField("BundleEntryRequest")
  public request?: BundleEntryRequest;

  @FhirField("BundleEntryResponse")
  public response?: BundleEntryResponse;

  public static parse(
    json: IBundleEntry,
    providedInstance: BundleEntry = new BundleEntry()
  ): BundleEntry {
    const newInstance: BundleEntry = BackboneElement.parse(json, providedInstance);
  
    if (json.link !== undefined) {
      newInstance.link = json.link.map((x) => BundleLink.parse(x));
    }
    if (json.fullUrl !== undefined) {
      newInstance.fullUrl = PrimitiveUri.parsePrimitive(json.fullUrl, json._fullUrl);
    }
    if (json.resource !== undefined) {
      newInstance.resource = Resource.parse(json.resource);
    }
    if (json.search !== undefined) {
      newInstance.search = BundleEntrySearch.parse(json.search);
    }
    if (json.request !== undefined) {
      newInstance.request = BundleEntryRequest.parse(json.request);
    }
    if (json.response !== undefined) {
      newInstance.response = BundleEntryResponse.parse(json.response);
    }
    return newInstance;
  }

  public static isBundleEntry(input?: unknown): input is BundleEntry {
    const castInput = input as BundleEntry;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BundleEntry";
  }

  public toJSON(): IBundleEntry {
    const result: IBundleEntry = super.toJSON();

    if (this.link) {
      result.link = this.link.map((x) => x.toJSON());
    }

    if (this.fullUrl) {
      result.fullUrl = this.fullUrl.value;
      result._fullUrl = Extension.serializePrimitiveExtension(this.fullUrl);
    }

    if (this.resource) {
      result.resource = this.resource.toJSON();
    }

    if (this.search) {
      result.search = this.search.toJSON();
    }

    if (this.request) {
      result.request = this.request.toJSON();
    }

    if (this.response) {
      result.response = this.response.toJSON();
    }

    return result;
  }

  public clone(): BundleEntry {
    return BundleEntry.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "BundleEntry";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
