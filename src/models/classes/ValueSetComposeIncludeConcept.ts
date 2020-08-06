/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IValueSetComposeIncludeConcept,
  PrimitiveCode,
  PrimitiveString,
  ValueSetComposeIncludeConceptDesignation,
} from "../internal";

export class ValueSetComposeIncludeConcept extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ValueSet.Compose.Include.Concept";

  public code?: PrimitiveCode;

  public display?: PrimitiveString;

  public designation?: Array<ValueSetComposeIncludeConceptDesignation>;

  public static parse(
    json: IValueSetComposeIncludeConcept,
    providedInstance: ValueSetComposeIncludeConcept = new ValueSetComposeIncludeConcept()
  ): ValueSetComposeIncludeConcept {
    const newInstance: ValueSetComposeIncludeConcept = BackboneElement.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.display) {
      newInstance.display = PrimitiveString.parsePrimitive(json.display, json._display);
    }
    if (json.designation) {
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
  
  public getTypeName(): string {
    return "ValueSetComposeIncludeConcept";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
