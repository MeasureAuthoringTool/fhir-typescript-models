/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  ITerminologyCapabilitiesCodeSystemVersionFilter,
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("TerminologyCapabilitiesCodeSystemVersionFilter", "BackboneElement")
export class TerminologyCapabilitiesCodeSystemVersionFilter extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TerminologyCapabilities.CodeSystem.Version.Filter";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveCode")
  public code?: PrimitiveCode;

  @FhirList("PrimitiveCode")
  public op?: Array<PrimitiveCode>;

  public static parse(
    json: ITerminologyCapabilitiesCodeSystemVersionFilter,
    providedInstance: TerminologyCapabilitiesCodeSystemVersionFilter = new TerminologyCapabilitiesCodeSystemVersionFilter()
  ): TerminologyCapabilitiesCodeSystemVersionFilter {
    const newInstance: TerminologyCapabilitiesCodeSystemVersionFilter = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.op !== undefined) {
      newInstance.op = json.op.map((x, i) => PrimitiveCode.parsePrimitive(x, json._op?.[i]));
    }
    return newInstance;
  }

  public static isTerminologyCapabilitiesCodeSystemVersionFilter(input?: unknown): input is TerminologyCapabilitiesCodeSystemVersionFilter {
    const castInput = input as TerminologyCapabilitiesCodeSystemVersionFilter;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TerminologyCapabilitiesCodeSystemVersionFilter";
  }

  public toJSON(): ITerminologyCapabilitiesCodeSystemVersionFilter {
    const result: ITerminologyCapabilitiesCodeSystemVersionFilter = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.op) {
      result.op = this.op.filter(x => !!x).map(x => x.value) as typeof result.op;
      result._op = Extension.serializePrimitiveExtensionArray(this.op);
    }

    return result;
  }

  public clone(): TerminologyCapabilitiesCodeSystemVersionFilter {
    return TerminologyCapabilitiesCodeSystemVersionFilter.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TerminologyCapabilitiesCodeSystemVersionFilter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
