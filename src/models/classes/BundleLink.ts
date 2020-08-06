/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IBundleLink,
  PrimitiveString,
  PrimitiveUri,
} from "../internal";

export class BundleLink extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Bundle.Link";

  public relation?: PrimitiveString;

  public url?: PrimitiveUri;

  public static parse(
    json: IBundleLink,
    providedInstance: BundleLink = new BundleLink()
  ): BundleLink {
    const newInstance: BundleLink = BackboneElement.parse(json, providedInstance);
  
    if (json.relation) {
      newInstance.relation = PrimitiveString.parsePrimitive(json.relation, json._relation);
    }
    if (json.url) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    return newInstance;
  }

  public static isBundleLink(input?: unknown): input is BundleLink {
    const castInput = input as BundleLink;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BundleLink";
  }

  public toJSON(): IBundleLink {
    const result: IBundleLink = super.toJSON();

    if (this.relation) {
      result.relation = this.relation.value;
      result._relation = Extension.serializePrimitiveExtension(this.relation);
    }

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "BundleLink";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
