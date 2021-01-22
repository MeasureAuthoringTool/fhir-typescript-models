/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  ITerminologyCapabilitiesImplementation,
  PrimitiveString,
  PrimitiveUrl,
  FhirType
} from "../internal";

@FhirType("TerminologyCapabilitiesImplementation", "BackboneElement")
export class TerminologyCapabilitiesImplementation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TerminologyCapabilities.Implementation";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("PrimitiveUrl")
  public url?: PrimitiveUrl;

  public static parse(
    json: ITerminologyCapabilitiesImplementation,
    providedInstance: TerminologyCapabilitiesImplementation = new TerminologyCapabilitiesImplementation()
  ): TerminologyCapabilitiesImplementation {
    const newInstance: TerminologyCapabilitiesImplementation = BackboneElement.parse(json, providedInstance);
  
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUrl.parsePrimitive(json.url, json._url);
    }
    return newInstance;
  }

  public static isTerminologyCapabilitiesImplementation(input?: unknown): input is TerminologyCapabilitiesImplementation {
    const castInput = input as TerminologyCapabilitiesImplementation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TerminologyCapabilitiesImplementation";
  }

  public toJSON(): ITerminologyCapabilitiesImplementation {
    const result: ITerminologyCapabilitiesImplementation = super.toJSON();

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    return result;
  }

  public clone(): TerminologyCapabilitiesImplementation {
    return TerminologyCapabilitiesImplementation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TerminologyCapabilitiesImplementation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
