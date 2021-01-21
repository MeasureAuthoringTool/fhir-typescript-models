/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Element,
  Extension,
  FHIRAllTypes,
  FhirField,
  IParameterDefinition,
  ParameterUse,
  PrimitiveCanonical,
  PrimitiveCode,
  PrimitiveInteger,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ParameterDefinition", "Element")
export class ParameterDefinition extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ParameterDefinition";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveCode")
  public name?: PrimitiveCode;

  @FhirField("ParameterUse")
  public use?: ParameterUse;

  @FhirField("PrimitiveInteger")
  public min?: PrimitiveInteger;

  @FhirField("PrimitiveString")
  public max?: PrimitiveString;

  @FhirField("PrimitiveString")
  public documentation?: PrimitiveString;

  @FhirField("FHIRAllTypes")
  public type?: FHIRAllTypes;

  @FhirField("PrimitiveCanonical")
  public profile?: PrimitiveCanonical;

  public static parse(
    json: IParameterDefinition,
    providedInstance: ParameterDefinition = new ParameterDefinition()
  ): ParameterDefinition {
    const newInstance: ParameterDefinition = Element.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveCode.parsePrimitive(json.name, json._name);
    }
    if (json.use !== undefined) {
      newInstance.use = ParameterUse.parsePrimitive(json.use, json._use);
    }
    if (json.min !== undefined) {
      newInstance.min = PrimitiveInteger.parsePrimitive(json.min, json._min);
    }
    if (json.max !== undefined) {
      newInstance.max = PrimitiveString.parsePrimitive(json.max, json._max);
    }
    if (json.documentation !== undefined) {
      newInstance.documentation = PrimitiveString.parsePrimitive(json.documentation, json._documentation);
    }
    if (json.type !== undefined) {
      newInstance.type = FHIRAllTypes.parsePrimitive(json.type, json._type);
    }
    if (json.profile !== undefined) {
      newInstance.profile = PrimitiveCanonical.parsePrimitive(json.profile, json._profile);
    }
    return newInstance;
  }

  public static isParameterDefinition(input?: unknown): input is ParameterDefinition {
    const castInput = input as ParameterDefinition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ParameterDefinition";
  }

  public toJSON(): IParameterDefinition {
    const result: IParameterDefinition = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.use) {
      result.use = this.use.value;
      result._use = Extension.serializePrimitiveExtension(this.use);
    }

    if (this.min) {
      result.min = this.min.value;
      result._min = Extension.serializePrimitiveExtension(this.min);
    }

    if (this.max) {
      result.max = this.max.value;
      result._max = Extension.serializePrimitiveExtension(this.max);
    }

    if (this.documentation) {
      result.documentation = this.documentation.value;
      result._documentation = Extension.serializePrimitiveExtension(this.documentation);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.profile) {
      result.profile = this.profile.value;
      result._profile = Extension.serializePrimitiveExtension(this.profile);
    }

    return result;
  }

  public clone(): ParameterDefinition {
    return ParameterDefinition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ParameterDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
