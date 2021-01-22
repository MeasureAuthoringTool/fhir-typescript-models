/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  ITerminologyCapabilitiesCodeSystem,
  PrimitiveBoolean,
  PrimitiveCanonical,
  TerminologyCapabilitiesCodeSystemVersion,
  FhirType
} from "../internal";

@FhirType("TerminologyCapabilitiesCodeSystem", "BackboneElement")
export class TerminologyCapabilitiesCodeSystem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TerminologyCapabilities.CodeSystem";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveCanonical")
  public uri?: PrimitiveCanonical;

  @FhirList("TerminologyCapabilitiesCodeSystemVersion")
  public version?: Array<TerminologyCapabilitiesCodeSystemVersion>;

  @FhirField("PrimitiveBoolean")
  public subsumption?: PrimitiveBoolean;

  public static parse(
    json: ITerminologyCapabilitiesCodeSystem,
    providedInstance: TerminologyCapabilitiesCodeSystem = new TerminologyCapabilitiesCodeSystem()
  ): TerminologyCapabilitiesCodeSystem {
    const newInstance: TerminologyCapabilitiesCodeSystem = BackboneElement.parse(json, providedInstance);
  
    if (json.uri !== undefined) {
      newInstance.uri = PrimitiveCanonical.parsePrimitive(json.uri, json._uri);
    }
    if (json.version !== undefined) {
      newInstance.version = json.version.map((x) => TerminologyCapabilitiesCodeSystemVersion.parse(x));
    }
    if (json.subsumption !== undefined) {
      newInstance.subsumption = PrimitiveBoolean.parsePrimitive(json.subsumption, json._subsumption);
    }
    return newInstance;
  }

  public static isTerminologyCapabilitiesCodeSystem(input?: unknown): input is TerminologyCapabilitiesCodeSystem {
    const castInput = input as TerminologyCapabilitiesCodeSystem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TerminologyCapabilitiesCodeSystem";
  }

  public toJSON(): ITerminologyCapabilitiesCodeSystem {
    const result: ITerminologyCapabilitiesCodeSystem = super.toJSON();

    if (this.uri) {
      result.uri = this.uri.value;
      result._uri = Extension.serializePrimitiveExtension(this.uri);
    }

    if (this.version) {
      result.version = this.version.map((x) => x.toJSON());
    }

    if (this.subsumption) {
      result.subsumption = this.subsumption.value;
      result._subsumption = Extension.serializePrimitiveExtension(this.subsumption);
    }

    return result;
  }

  public clone(): TerminologyCapabilitiesCodeSystem {
    return TerminologyCapabilitiesCodeSystem.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TerminologyCapabilitiesCodeSystem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
