/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IConsentPolicy,
  PrimitiveUri,
  FhirType
} from "../internal";

@FhirType("ConsentPolicy", "BackboneElement")
export class ConsentPolicy extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Consent.Policy";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveUri")
  public authority?: PrimitiveUri;

  @FhirField("PrimitiveUri")
  public uri?: PrimitiveUri;

  public static parse(
    json: IConsentPolicy,
    providedInstance: ConsentPolicy = new ConsentPolicy()
  ): ConsentPolicy {
    const newInstance: ConsentPolicy = BackboneElement.parse(json, providedInstance);
  
    if (json.authority !== undefined) {
      newInstance.authority = PrimitiveUri.parsePrimitive(json.authority, json._authority);
    }
    if (json.uri !== undefined) {
      newInstance.uri = PrimitiveUri.parsePrimitive(json.uri, json._uri);
    }
    return newInstance;
  }

  public static isConsentPolicy(input?: unknown): input is ConsentPolicy {
    const castInput = input as ConsentPolicy;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConsentPolicy";
  }

  public toJSON(): IConsentPolicy {
    const result: IConsentPolicy = super.toJSON();

    if (this.authority) {
      result.authority = this.authority.value;
      result._authority = Extension.serializePrimitiveExtension(this.authority);
    }

    if (this.uri) {
      result.uri = this.uri.value;
      result._uri = Extension.serializePrimitiveExtension(this.uri);
    }

    return result;
  }

  public clone(): ConsentPolicy {
    return ConsentPolicy.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ConsentPolicy";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
