/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IImplementationGuideDefinitionTemplate,
  PrimitiveCode,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ImplementationGuideDefinitionTemplate", "BackboneElement")
export class ImplementationGuideDefinitionTemplate extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImplementationGuide.Definition.Template";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveCode")
  public code?: PrimitiveCode;

  @FhirField("PrimitiveString")
  public source?: PrimitiveString;

  @FhirField("PrimitiveString")
  public scope?: PrimitiveString;

  public static parse(
    json: IImplementationGuideDefinitionTemplate,
    providedInstance: ImplementationGuideDefinitionTemplate = new ImplementationGuideDefinitionTemplate()
  ): ImplementationGuideDefinitionTemplate {
    const newInstance: ImplementationGuideDefinitionTemplate = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.source !== undefined) {
      newInstance.source = PrimitiveString.parsePrimitive(json.source, json._source);
    }
    if (json.scope !== undefined) {
      newInstance.scope = PrimitiveString.parsePrimitive(json.scope, json._scope);
    }
    return newInstance;
  }

  public static isImplementationGuideDefinitionTemplate(input?: unknown): input is ImplementationGuideDefinitionTemplate {
    const castInput = input as ImplementationGuideDefinitionTemplate;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImplementationGuideDefinitionTemplate";
  }

  public toJSON(): IImplementationGuideDefinitionTemplate {
    const result: IImplementationGuideDefinitionTemplate = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.source) {
      result.source = this.source.value;
      result._source = Extension.serializePrimitiveExtension(this.source);
    }

    if (this.scope) {
      result.scope = this.scope.value;
      result._scope = Extension.serializePrimitiveExtension(this.scope);
    }

    return result;
  }

  public clone(): ImplementationGuideDefinitionTemplate {
    return ImplementationGuideDefinitionTemplate.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImplementationGuideDefinitionTemplate";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
