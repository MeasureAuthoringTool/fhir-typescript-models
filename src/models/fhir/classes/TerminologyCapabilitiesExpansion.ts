/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  ITerminologyCapabilitiesExpansion,
  PrimitiveBoolean,
  PrimitiveMarkdown,
  TerminologyCapabilitiesExpansionParameter,
  FhirType
} from "../internal";

@FhirType("TerminologyCapabilitiesExpansion", "BackboneElement")
export class TerminologyCapabilitiesExpansion extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TerminologyCapabilities.Expansion";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveBoolean")
  public hierarchical?: PrimitiveBoolean;

  @FhirField("PrimitiveBoolean")
  public paging?: PrimitiveBoolean;

  @FhirField("PrimitiveBoolean")
  public incomplete?: PrimitiveBoolean;

  @FhirList("TerminologyCapabilitiesExpansionParameter")
  public parameter?: Array<TerminologyCapabilitiesExpansionParameter>;

  @FhirField("PrimitiveMarkdown")
  public textFilter?: PrimitiveMarkdown;

  public static parse(
    json: ITerminologyCapabilitiesExpansion,
    providedInstance: TerminologyCapabilitiesExpansion = new TerminologyCapabilitiesExpansion()
  ): TerminologyCapabilitiesExpansion {
    const newInstance: TerminologyCapabilitiesExpansion = BackboneElement.parse(json, providedInstance);
  
    if (json.hierarchical !== undefined) {
      newInstance.hierarchical = PrimitiveBoolean.parsePrimitive(json.hierarchical, json._hierarchical);
    }
    if (json.paging !== undefined) {
      newInstance.paging = PrimitiveBoolean.parsePrimitive(json.paging, json._paging);
    }
    if (json.incomplete !== undefined) {
      newInstance.incomplete = PrimitiveBoolean.parsePrimitive(json.incomplete, json._incomplete);
    }
    if (json.parameter !== undefined) {
      newInstance.parameter = json.parameter.map((x) => TerminologyCapabilitiesExpansionParameter.parse(x));
    }
    if (json.textFilter !== undefined) {
      newInstance.textFilter = PrimitiveMarkdown.parsePrimitive(json.textFilter, json._textFilter);
    }
    return newInstance;
  }

  public static isTerminologyCapabilitiesExpansion(input?: unknown): input is TerminologyCapabilitiesExpansion {
    const castInput = input as TerminologyCapabilitiesExpansion;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TerminologyCapabilitiesExpansion";
  }

  public toJSON(): ITerminologyCapabilitiesExpansion {
    const result: ITerminologyCapabilitiesExpansion = super.toJSON();

    if (this.hierarchical) {
      result.hierarchical = this.hierarchical.value;
      result._hierarchical = Extension.serializePrimitiveExtension(this.hierarchical);
    }

    if (this.paging) {
      result.paging = this.paging.value;
      result._paging = Extension.serializePrimitiveExtension(this.paging);
    }

    if (this.incomplete) {
      result.incomplete = this.incomplete.value;
      result._incomplete = Extension.serializePrimitiveExtension(this.incomplete);
    }

    if (this.parameter) {
      result.parameter = this.parameter.map((x) => x.toJSON());
    }

    if (this.textFilter) {
      result.textFilter = this.textFilter.value;
      result._textFilter = Extension.serializePrimitiveExtension(this.textFilter);
    }

    return result;
  }

  public clone(): TerminologyCapabilitiesExpansion {
    return TerminologyCapabilitiesExpansion.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TerminologyCapabilitiesExpansion";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
