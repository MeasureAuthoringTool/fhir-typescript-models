/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ITerminologyCapabilitiesExpansionParameter,
  PrimitiveCode,
  PrimitiveString,
} from "../internal";

export class TerminologyCapabilitiesExpansionParameter extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TerminologyCapabilities.Expansion.Parameter";

  public name?: PrimitiveCode;

  public documentation?: PrimitiveString;

  public static parse(
    json: ITerminologyCapabilitiesExpansionParameter,
    providedInstance: TerminologyCapabilitiesExpansionParameter = new TerminologyCapabilitiesExpansionParameter()
  ): TerminologyCapabilitiesExpansionParameter {
    const newInstance: TerminologyCapabilitiesExpansionParameter = BackboneElement.parse(json, providedInstance);
  
    if (json.name) {
      newInstance.name = PrimitiveCode.parsePrimitive(json.name, json._name);
    }
    if (json.documentation) {
      newInstance.documentation = PrimitiveString.parsePrimitive(json.documentation, json._documentation);
    }
    return newInstance;
  }

  public static isTerminologyCapabilitiesExpansionParameter(input?: unknown): input is TerminologyCapabilitiesExpansionParameter {
    const castInput = input as TerminologyCapabilitiesExpansionParameter;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TerminologyCapabilitiesExpansionParameter";
  }

  public toJSON(): ITerminologyCapabilitiesExpansionParameter {
    const result: ITerminologyCapabilitiesExpansionParameter = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.documentation) {
      result.documentation = this.documentation.value;
      result._documentation = Extension.serializePrimitiveExtension(this.documentation);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "TerminologyCapabilitiesExpansionParameter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
