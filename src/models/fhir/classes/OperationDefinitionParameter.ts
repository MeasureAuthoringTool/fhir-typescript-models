/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FHIRAllTypes,
  FhirField,
  FhirList,
  IOperationDefinitionParameter,
  OperationDefinitionParameterBinding,
  OperationDefinitionParameterReferencedFrom,
  OperationParameterUse,
  PrimitiveCanonical,
  PrimitiveCode,
  PrimitiveInteger,
  PrimitiveString,
  SearchParamType,
  FhirType
} from "../internal";

@FhirType("OperationDefinitionParameter", "BackboneElement")
export class OperationDefinitionParameter extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "OperationDefinition.Parameter";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveCode")
  public name?: PrimitiveCode;

  @FhirField("OperationParameterUse")
  public use?: OperationParameterUse;

  @FhirField("PrimitiveInteger")
  public min?: PrimitiveInteger;

  @FhirField("PrimitiveString")
  public max?: PrimitiveString;

  @FhirField("PrimitiveString")
  public documentation?: PrimitiveString;

  @FhirField("FHIRAllTypes")
  public type?: FHIRAllTypes;

  @FhirList("PrimitiveCanonical")
  public targetProfile?: Array<PrimitiveCanonical>;

  @FhirField("SearchParamType")
  public searchType?: SearchParamType;

  @FhirField("OperationDefinitionParameterBinding")
  public binding?: OperationDefinitionParameterBinding;

  @FhirList("OperationDefinitionParameterReferencedFrom")
  public referencedFrom?: Array<OperationDefinitionParameterReferencedFrom>;

  @FhirList("OperationDefinitionParameter")
  public part?: Array<OperationDefinitionParameter>;

  public static parse(
    json: IOperationDefinitionParameter,
    providedInstance: OperationDefinitionParameter = new OperationDefinitionParameter()
  ): OperationDefinitionParameter {
    const newInstance: OperationDefinitionParameter = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveCode.parsePrimitive(json.name, json._name);
    }
    if (json.use !== undefined) {
      newInstance.use = OperationParameterUse.parsePrimitive(json.use, json._use);
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
    if (json.targetProfile !== undefined) {
      newInstance.targetProfile = json.targetProfile.map((x, i) => PrimitiveCanonical.parsePrimitive(x, json._targetProfile?.[i]));
    }
    if (json.searchType !== undefined) {
      newInstance.searchType = SearchParamType.parsePrimitive(json.searchType, json._searchType);
    }
    if (json.binding !== undefined) {
      newInstance.binding = OperationDefinitionParameterBinding.parse(json.binding);
    }
    if (json.referencedFrom !== undefined) {
      newInstance.referencedFrom = json.referencedFrom.map((x) => OperationDefinitionParameterReferencedFrom.parse(x));
    }
    if (json.part !== undefined) {
      newInstance.part = json.part.map((x) => OperationDefinitionParameter.parse(x));
    }
    return newInstance;
  }

  public static isOperationDefinitionParameter(input?: unknown): input is OperationDefinitionParameter {
    const castInput = input as OperationDefinitionParameter;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "OperationDefinitionParameter";
  }

  public toJSON(): IOperationDefinitionParameter {
    const result: IOperationDefinitionParameter = super.toJSON();

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

    if (this.targetProfile) {
      result.targetProfile = this.targetProfile.filter(x => !!x).map(x => x.value) as typeof result.targetProfile;
      result._targetProfile = Extension.serializePrimitiveExtensionArray(this.targetProfile);
    }

    if (this.searchType) {
      result.searchType = this.searchType.value;
      result._searchType = Extension.serializePrimitiveExtension(this.searchType);
    }

    if (this.binding) {
      result.binding = this.binding.toJSON();
    }

    if (this.referencedFrom) {
      result.referencedFrom = this.referencedFrom.map((x) => x.toJSON());
    }

    if (this.part) {
      result.part = this.part.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): OperationDefinitionParameter {
    return OperationDefinitionParameter.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "OperationDefinitionParameter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
