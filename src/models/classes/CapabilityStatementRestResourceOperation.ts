/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ICapabilityStatementRestResourceOperation,
  PrimitiveCanonical,
  PrimitiveMarkdown,
  PrimitiveString,
} from "../internal";

export class CapabilityStatementRestResourceOperation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatement.Rest.Resource.Operation";

  public name?: PrimitiveString;

  public definition?: PrimitiveCanonical;

  public documentation?: PrimitiveMarkdown;

  public static parse(
    json: ICapabilityStatementRestResourceOperation,
    providedInstance: CapabilityStatementRestResourceOperation = new CapabilityStatementRestResourceOperation()
  ): CapabilityStatementRestResourceOperation {
    const newInstance: CapabilityStatementRestResourceOperation = BackboneElement.parse(json, providedInstance);
  
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.definition) {
      newInstance.definition = PrimitiveCanonical.parsePrimitive(json.definition, json._definition);
    }
    if (json.documentation) {
      newInstance.documentation = PrimitiveMarkdown.parsePrimitive(json.documentation, json._documentation);
    }
    return newInstance;
  }

  public static isCapabilityStatementRestResourceOperation(input?: unknown): input is CapabilityStatementRestResourceOperation {
    const castInput = input as CapabilityStatementRestResourceOperation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CapabilityStatementRestResourceOperation";
  }

  public toJSON(): ICapabilityStatementRestResourceOperation {
    const result: ICapabilityStatementRestResourceOperation = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.definition) {
      result.definition = this.definition.value;
      result._definition = Extension.serializePrimitiveExtension(this.definition);
    }

    if (this.documentation) {
      result.documentation = this.documentation.value;
      result._documentation = Extension.serializePrimitiveExtension(this.documentation);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "CapabilityStatementRestResourceOperation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
