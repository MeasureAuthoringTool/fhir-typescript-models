/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ITerminologyCapabilitiesClosure,
  PrimitiveBoolean,
} from "../internal";

export class TerminologyCapabilitiesClosure extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TerminologyCapabilities.Closure";

  public translation?: PrimitiveBoolean;

  public static parse(
    json: ITerminologyCapabilitiesClosure,
    providedInstance: TerminologyCapabilitiesClosure = new TerminologyCapabilitiesClosure()
  ): TerminologyCapabilitiesClosure {
    const newInstance: TerminologyCapabilitiesClosure = BackboneElement.parse(json, providedInstance);
  
    if (json.translation) {
      newInstance.translation = PrimitiveBoolean.parsePrimitive(json.translation, json._translation);
    }
    return newInstance;
  }

  public static isTerminologyCapabilitiesClosure(input?: unknown): input is TerminologyCapabilitiesClosure {
    const castInput = input as TerminologyCapabilitiesClosure;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TerminologyCapabilitiesClosure";
  }

  public toJSON(): ITerminologyCapabilitiesClosure {
    const result: ITerminologyCapabilitiesClosure = super.toJSON();

    if (this.translation) {
      result.translation = this.translation.value;
      result._translation = Extension.serializePrimitiveExtension(this.translation);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "TerminologyCapabilitiesClosure";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
