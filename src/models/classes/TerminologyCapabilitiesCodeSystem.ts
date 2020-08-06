/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ITerminologyCapabilitiesCodeSystem,
  PrimitiveBoolean,
  PrimitiveCanonical,
  TerminologyCapabilitiesCodeSystemVersion,
} from "../internal";

export class TerminologyCapabilitiesCodeSystem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TerminologyCapabilities.CodeSystem";

  public uri?: PrimitiveCanonical;

  public version?: Array<TerminologyCapabilitiesCodeSystemVersion>;

  public subsumption?: PrimitiveBoolean;

  public static parse(
    json: ITerminologyCapabilitiesCodeSystem,
    providedInstance: TerminologyCapabilitiesCodeSystem = new TerminologyCapabilitiesCodeSystem()
  ): TerminologyCapabilitiesCodeSystem {
    const newInstance: TerminologyCapabilitiesCodeSystem = BackboneElement.parse(json, providedInstance);
  
    if (json.uri) {
      newInstance.uri = PrimitiveCanonical.parsePrimitive(json.uri, json._uri);
    }
    if (json.version) {
      newInstance.version = json.version.map((x) => TerminologyCapabilitiesCodeSystemVersion.parse(x));
    }
    if (json.subsumption) {
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
  
  public getTypeName(): string {
    return "TerminologyCapabilitiesCodeSystem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
