/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  HTTPVerb,
  IBundleEntryRequest,
  PrimitiveInstant,
  PrimitiveString,
  PrimitiveUri,
  FhirType
} from "../internal";

@FhirType("BundleEntryRequest", "BackboneElement")
export class BundleEntryRequest extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Bundle.Entry.Request";

  static readonly primaryCodePath: string | null = null;

  @FhirField("HTTPVerb")
  public method?: HTTPVerb;

  @FhirField("PrimitiveUri")
  public url?: PrimitiveUri;

  @FhirField("PrimitiveString")
  public ifNoneMatch?: PrimitiveString;

  @FhirField("PrimitiveInstant")
  public ifModifiedSince?: PrimitiveInstant;

  @FhirField("PrimitiveString")
  public ifMatch?: PrimitiveString;

  @FhirField("PrimitiveString")
  public ifNoneExist?: PrimitiveString;

  public static parse(
    json: IBundleEntryRequest,
    providedInstance: BundleEntryRequest = new BundleEntryRequest()
  ): BundleEntryRequest {
    const newInstance: BundleEntryRequest = BackboneElement.parse(json, providedInstance);
  
    if (json.method !== undefined) {
      newInstance.method = HTTPVerb.parsePrimitive(json.method, json._method);
    }
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.ifNoneMatch !== undefined) {
      newInstance.ifNoneMatch = PrimitiveString.parsePrimitive(json.ifNoneMatch, json._ifNoneMatch);
    }
    if (json.ifModifiedSince !== undefined) {
      newInstance.ifModifiedSince = PrimitiveInstant.parsePrimitive(json.ifModifiedSince, json._ifModifiedSince);
    }
    if (json.ifMatch !== undefined) {
      newInstance.ifMatch = PrimitiveString.parsePrimitive(json.ifMatch, json._ifMatch);
    }
    if (json.ifNoneExist !== undefined) {
      newInstance.ifNoneExist = PrimitiveString.parsePrimitive(json.ifNoneExist, json._ifNoneExist);
    }
    return newInstance;
  }

  public static isBundleEntryRequest(input?: unknown): input is BundleEntryRequest {
    const castInput = input as BundleEntryRequest;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BundleEntryRequest";
  }

  public toJSON(): IBundleEntryRequest {
    const result: IBundleEntryRequest = super.toJSON();

    if (this.method) {
      result.method = this.method.value;
      result._method = Extension.serializePrimitiveExtension(this.method);
    }

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.ifNoneMatch) {
      result.ifNoneMatch = this.ifNoneMatch.value;
      result._ifNoneMatch = Extension.serializePrimitiveExtension(this.ifNoneMatch);
    }

    if (this.ifModifiedSince) {
      result.ifModifiedSince = this.ifModifiedSince.value;
      result._ifModifiedSince = Extension.serializePrimitiveExtension(this.ifModifiedSince);
    }

    if (this.ifMatch) {
      result.ifMatch = this.ifMatch.value;
      result._ifMatch = Extension.serializePrimitiveExtension(this.ifMatch);
    }

    if (this.ifNoneExist) {
      result.ifNoneExist = this.ifNoneExist.value;
      result._ifNoneExist = Extension.serializePrimitiveExtension(this.ifNoneExist);
    }

    return result;
  }

  public clone(): BundleEntryRequest {
    return BundleEntryRequest.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "BundleEntryRequest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
