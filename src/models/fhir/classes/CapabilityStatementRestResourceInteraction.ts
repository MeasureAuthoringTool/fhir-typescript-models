/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  ICapabilityStatementRestResourceInteraction,
  PrimitiveMarkdown,
  TypeRestfulInteraction,
  FhirType
} from "../internal";

@FhirType("CapabilityStatementRestResourceInteraction", "BackboneElement")
export class CapabilityStatementRestResourceInteraction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatement.Rest.Resource.Interaction";

  static readonly primaryCodePath: string | null = null;

  @FhirField("TypeRestfulInteraction")
  public code?: TypeRestfulInteraction;

  @FhirField("PrimitiveMarkdown")
  public documentation?: PrimitiveMarkdown;

  public static parse(
    json: ICapabilityStatementRestResourceInteraction,
    providedInstance: CapabilityStatementRestResourceInteraction = new CapabilityStatementRestResourceInteraction()
  ): CapabilityStatementRestResourceInteraction {
    const newInstance: CapabilityStatementRestResourceInteraction = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = TypeRestfulInteraction.parsePrimitive(json.code, json._code);
    }
    if (json.documentation !== undefined) {
      newInstance.documentation = PrimitiveMarkdown.parsePrimitive(json.documentation, json._documentation);
    }
    return newInstance;
  }

  public static isCapabilityStatementRestResourceInteraction(input?: unknown): input is CapabilityStatementRestResourceInteraction {
    const castInput = input as CapabilityStatementRestResourceInteraction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CapabilityStatementRestResourceInteraction";
  }

  public toJSON(): ICapabilityStatementRestResourceInteraction {
    const result: ICapabilityStatementRestResourceInteraction = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.documentation) {
      result.documentation = this.documentation.value;
      result._documentation = Extension.serializePrimitiveExtension(this.documentation);
    }

    return result;
  }

  public clone(): CapabilityStatementRestResourceInteraction {
    return CapabilityStatementRestResourceInteraction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CapabilityStatementRestResourceInteraction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
