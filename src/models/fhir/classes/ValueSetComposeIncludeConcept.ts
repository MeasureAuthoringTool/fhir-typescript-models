/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  IValueSetComposeIncludeConcept,
  PrimitiveCode,
  PrimitiveString,
  ValueSetComposeIncludeConceptDesignation,
  FhirType
} from "../internal";

@FhirType("ValueSetComposeIncludeConcept", "BackboneElement")
export class ValueSetComposeIncludeConcept extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ValueSet.Compose.Include.Concept";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveCode")
  public code?: PrimitiveCode;

  @FhirField("PrimitiveString")
  public display?: PrimitiveString;

  @FhirList("ValueSetComposeIncludeConceptDesignation")
  public designation?: Array<ValueSetComposeIncludeConceptDesignation>;

  public static parse(
    json: IValueSetComposeIncludeConcept,
    providedInstance: ValueSetComposeIncludeConcept = new ValueSetComposeIncludeConcept()
  ): ValueSetComposeIncludeConcept {
    const newInstance: ValueSetComposeIncludeConcept = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.display !== undefined) {
      newInstance.display = PrimitiveString.parsePrimitive(json.display, json._display);
    }
    if (json.designation !== undefined) {
      newInstance.designation = json.designation.map((x) => ValueSetComposeIncludeConceptDesignation.parse(x));
    }
    return newInstance;
  }

  public static isValueSetComposeIncludeConcept(input?: unknown): input is ValueSetComposeIncludeConcept {
    const castInput = input as ValueSetComposeIncludeConcept;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ValueSetComposeIncludeConcept";
  }

  public toJSON(): IValueSetComposeIncludeConcept {
    const result: IValueSetComposeIncludeConcept = super.toJSON();

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

    return result;
  }

  public clone(): ValueSetComposeIncludeConcept {
    return ValueSetComposeIncludeConcept.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ValueSetComposeIncludeConcept";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
