/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Coding,
  Element,
  Extension,
  FhirField,
  FhirList,
  IMeta,
  PrimitiveCanonical,
  PrimitiveId,
  PrimitiveInstant,
  PrimitiveUri,
  FhirType
} from "../internal";

@FhirType("Meta", "Element")
export class Meta extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Meta";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveId")
  public versionId?: PrimitiveId;

  @FhirField("PrimitiveInstant")
  public lastUpdated?: PrimitiveInstant;

  @FhirField("PrimitiveUri")
  public source?: PrimitiveUri;

  @FhirList("PrimitiveCanonical")
  public profile?: Array<PrimitiveCanonical>;

  @FhirList("Coding")
  public security?: Array<Coding>;

  @FhirList("Coding")
  public tag?: Array<Coding>;

  public static parse(
    json: IMeta,
    providedInstance: Meta = new Meta()
  ): Meta {
    const newInstance: Meta = Element.parse(json, providedInstance);
  
    if (json.versionId !== undefined) {
      newInstance.versionId = PrimitiveId.parsePrimitive(json.versionId, json._versionId);
    }
    if (json.lastUpdated !== undefined) {
      newInstance.lastUpdated = PrimitiveInstant.parsePrimitive(json.lastUpdated, json._lastUpdated);
    }
    if (json.source !== undefined) {
      newInstance.source = PrimitiveUri.parsePrimitive(json.source, json._source);
    }
    if (json.profile !== undefined) {
      newInstance.profile = json.profile.map((x, i) => PrimitiveCanonical.parsePrimitive(x, json._profile?.[i]));
    }
    if (json.security !== undefined) {
      newInstance.security = json.security.map((x) => Coding.parse(x));
    }
    if (json.tag !== undefined) {
      newInstance.tag = json.tag.map((x) => Coding.parse(x));
    }
    return newInstance;
  }

  public static isMeta(input?: unknown): input is Meta {
    const castInput = input as Meta;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Meta";
  }

  public toJSON(): IMeta {
    const result: IMeta = super.toJSON();

    if (this.versionId) {
      result.versionId = this.versionId.value;
      result._versionId = Extension.serializePrimitiveExtension(this.versionId);
    }

    if (this.lastUpdated) {
      result.lastUpdated = this.lastUpdated.value;
      result._lastUpdated = Extension.serializePrimitiveExtension(this.lastUpdated);
    }

    if (this.source) {
      result.source = this.source.value;
      result._source = Extension.serializePrimitiveExtension(this.source);
    }

    if (this.profile) {
      result.profile = this.profile.filter(x => !!x).map(x => x.value) as typeof result.profile;
      result._profile = Extension.serializePrimitiveExtensionArray(this.profile);
    }

    if (this.security) {
      result.security = this.security.map((x) => x.toJSON());
    }

    if (this.tag) {
      result.tag = this.tag.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Meta {
    return Meta.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Meta";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
