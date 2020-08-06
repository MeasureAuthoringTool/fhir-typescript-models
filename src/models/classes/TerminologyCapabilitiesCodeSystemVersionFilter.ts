/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ITerminologyCapabilitiesCodeSystemVersionFilter,
  PrimitiveCode,
} from "../internal";

export class TerminologyCapabilitiesCodeSystemVersionFilter extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TerminologyCapabilities.CodeSystem.Version.Filter";

  public code?: PrimitiveCode;

  public op?: Array<PrimitiveCode>;

  public static parse(
    json: ITerminologyCapabilitiesCodeSystemVersionFilter,
    providedInstance: TerminologyCapabilitiesCodeSystemVersionFilter = new TerminologyCapabilitiesCodeSystemVersionFilter()
  ): TerminologyCapabilitiesCodeSystemVersionFilter {
    const newInstance: TerminologyCapabilitiesCodeSystemVersionFilter = BackboneElement.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.op) {
      newInstance.op = json.op.map((x, i) => {
        const ext = json._op && json._op[i];
        return PrimitiveCode.parsePrimitive(x, ext);
      });
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
  
  public getTypeName(): string {
    return "TerminologyCapabilitiesCodeSystemVersionFilter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
