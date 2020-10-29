/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IBundleEntryResponse,
  PrimitiveInstant,
  PrimitiveString,
  PrimitiveUri,
  Resource,
  FieldMetadata
} from "../internal";

export class BundleEntryResponse extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Bundle.Entry.Response";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "status",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "location",
      fieldType: [PrimitiveUri],
      isArray: false
    }, {
      fieldName: "etag",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "lastModified",
      fieldType: [PrimitiveInstant],
      isArray: false
    }, {
      fieldName: "outcome",
      fieldType: [Resource],
      isArray: false
    }];
  }

  public status?: PrimitiveString;

  public location?: PrimitiveUri;

  public etag?: PrimitiveString;

  public lastModified?: PrimitiveInstant;

  public outcome?: Resource;

  public static parse(
    json: IBundleEntryResponse,
    providedInstance: BundleEntryResponse = new BundleEntryResponse()
  ): BundleEntryResponse {
    const newInstance: BundleEntryResponse = BackboneElement.parse(json, providedInstance);
  
    if (json.status !== undefined) {
      newInstance.status = PrimitiveString.parsePrimitive(json.status, json._status);
    }
    if (json.location !== undefined) {
      newInstance.location = PrimitiveUri.parsePrimitive(json.location, json._location);
    }
    if (json.etag !== undefined) {
      newInstance.etag = PrimitiveString.parsePrimitive(json.etag, json._etag);
    }
    if (json.lastModified !== undefined) {
      newInstance.lastModified = PrimitiveInstant.parsePrimitive(json.lastModified, json._lastModified);
    }
    if (json.outcome !== undefined) {
      newInstance.outcome = Resource.parse(json.outcome);
    }
    return newInstance;
  }

  public static isBundleEntryResponse(input?: unknown): input is BundleEntryResponse {
    const castInput = input as BundleEntryResponse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BundleEntryResponse";
  }

  public toJSON(): IBundleEntryResponse {
    const result: IBundleEntryResponse = super.toJSON();

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.location) {
      result.location = this.location.value;
      result._location = Extension.serializePrimitiveExtension(this.location);
    }

    if (this.etag) {
      result.etag = this.etag.value;
      result._etag = Extension.serializePrimitiveExtension(this.etag);
    }

    if (this.lastModified) {
      result.lastModified = this.lastModified.value;
      result._lastModified = Extension.serializePrimitiveExtension(this.lastModified);
    }

    if (this.outcome) {
      result.outcome = this.outcome.toJSON();
    }

    return result;
  }

  public clone(): BundleEntryResponse {
    return BundleEntryResponse.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "BundleEntryResponse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
