/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  IValueSetExpansionContains,
  PrimitiveBoolean,
  PrimitiveCode,
  PrimitiveString,
  PrimitiveUri,
  ValueSetComposeIncludeConceptDesignation,
  FhirType
} from "../internal";

@FhirType("ValueSetExpansionContains", "BackboneElement")
export class ValueSetExpansionContains extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ValueSet.Expansion.Contains";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveUri")
  public system?: PrimitiveUri;

  @FhirField("PrimitiveBoolean")
  public abstract?: PrimitiveBoolean;

  @FhirField("PrimitiveBoolean")
  public inactive?: PrimitiveBoolean;

  @FhirField("PrimitiveString")
  public version?: PrimitiveString;

  @FhirField("PrimitiveCode")
  public code?: PrimitiveCode;

  @FhirField("PrimitiveString")
  public display?: PrimitiveString;

  @FhirList("ValueSetComposeIncludeConceptDesignation")
  public designation?: Array<ValueSetComposeIncludeConceptDesignation>;

  @FhirList("ValueSetExpansionContains")
  public contains?: Array<ValueSetExpansionContains>;

  public static parse(
    json: IValueSetExpansionContains,
    providedInstance: ValueSetExpansionContains = new ValueSetExpansionContains()
  ): ValueSetExpansionContains {
    const newInstance: ValueSetExpansionContains = BackboneElement.parse(json, providedInstance);
  
    if (json.system !== undefined) {
      newInstance.system = PrimitiveUri.parsePrimitive(json.system, json._system);
    }
    if (json.abstract !== undefined) {
      newInstance.abstract = PrimitiveBoolean.parsePrimitive(json.abstract, json._abstract);
    }
    if (json.inactive !== undefined) {
      newInstance.inactive = PrimitiveBoolean.parsePrimitive(json.inactive, json._inactive);
    }
    if (json.version !== undefined) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    if (json.code !== undefined) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.display !== undefined) {
      newInstance.display = PrimitiveString.parsePrimitive(json.display, json._display);
    }
    if (json.designation !== undefined) {
      newInstance.designation = json.designation.map((x) => ValueSetComposeIncludeConceptDesignation.parse(x));
    }
    if (json.contains !== undefined) {
      newInstance.contains = json.contains.map((x) => ValueSetExpansionContains.parse(x));
    }
    return newInstance;
  }

  public static isValueSetExpansionContains(input?: unknown): input is ValueSetExpansionContains {
    const castInput = input as ValueSetExpansionContains;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ValueSetExpansionContains";
  }

  public toJSON(): IValueSetExpansionContains {
    const result: IValueSetExpansionContains = super.toJSON();

    if (this.system) {
      result.system = this.system.value;
      result._system = Extension.serializePrimitiveExtension(this.system);
    }

    if (this.abstract) {
      result.abstract = this.abstract.value;
      result._abstract = Extension.serializePrimitiveExtension(this.abstract);
    }

    if (this.inactive) {
      result.inactive = this.inactive.value;
      result._inactive = Extension.serializePrimitiveExtension(this.inactive);
    }

    if (this.version) {
      result.version = this.version.value;
      result._version = Extension.serializePrimitiveExtension(this.version);
    }

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.display) {
      result.display = this.display.value;
      result._display = Extension.serializePrimitiveExtension(this.display);
    }

    if (this.designation) {
      result.designation = this.designation.map((x) => x.toJSON());
    }

    if (this.contains) {
      result.contains = this.contains.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ValueSetExpansionContains {
    return ValueSetExpansionContains.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ValueSetExpansionContains";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
