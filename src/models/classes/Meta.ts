/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Coding,
  Element,
  Extension,
  IMeta,
  PrimitiveCanonical,
  PrimitiveId,
  PrimitiveInstant,
  PrimitiveUri,
} from "../internal";

export class Meta extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Meta";

  public versionId?: PrimitiveId;

  public lastUpdated?: PrimitiveInstant;

  public source?: PrimitiveUri;

  public profile?: Array<PrimitiveCanonical>;

  public security?: Array<Coding>;

  public tag?: Array<Coding>;

  public static parse(
    json: IMeta,
    providedInstance: Meta = new Meta()
  ): Meta {
    const newInstance: Meta = Element.parse(json, providedInstance);
  
    if (json.versionId) {
      newInstance.versionId = PrimitiveId.parsePrimitive(json.versionId, json._versionId);
    }
    if (json.lastUpdated) {
      newInstance.lastUpdated = PrimitiveInstant.parsePrimitive(json.lastUpdated, json._lastUpdated);
    }
    if (json.source) {
      newInstance.source = PrimitiveUri.parsePrimitive(json.source, json._source);
    }
    if (json.profile) {
      newInstance.profile = json.profile.map((x, i) => {
        const ext = json._profile && json._profile[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    if (json.security) {
      newInstance.security = json.security.map((x) => Coding.parse(x));
    }
    if (json.tag) {
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
  
  public getTypeName(): string {
    return "Meta";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
