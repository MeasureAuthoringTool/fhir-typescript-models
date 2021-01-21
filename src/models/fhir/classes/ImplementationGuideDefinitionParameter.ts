/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  GuideParameterCode,
  IImplementationGuideDefinitionParameter,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ImplementationGuideDefinitionParameter", "BackboneElement")
export class ImplementationGuideDefinitionParameter extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImplementationGuide.Definition.Parameter";

  static readonly primaryCodePath: string | null = null;

  @FhirField("GuideParameterCode")
  public code?: GuideParameterCode;

  @FhirField("PrimitiveString")
  public value?: PrimitiveString;

  public static parse(
    json: IImplementationGuideDefinitionParameter,
    providedInstance: ImplementationGuideDefinitionParameter = new ImplementationGuideDefinitionParameter()
  ): ImplementationGuideDefinitionParameter {
    const newInstance: ImplementationGuideDefinitionParameter = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = GuideParameterCode.parsePrimitive(json.code, json._code);
    }
    if (json.value !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    return newInstance;
  }

  public static isImplementationGuideDefinitionParameter(input?: unknown): input is ImplementationGuideDefinitionParameter {
    const castInput = input as ImplementationGuideDefinitionParameter;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImplementationGuideDefinitionParameter";
  }

  public toJSON(): IImplementationGuideDefinitionParameter {
    const result: IImplementationGuideDefinitionParameter = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }

  public clone(): ImplementationGuideDefinitionParameter {
    return ImplementationGuideDefinitionParameter.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImplementationGuideDefinitionParameter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
