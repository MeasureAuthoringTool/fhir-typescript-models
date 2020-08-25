/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Coding,
  Extension,
  IValueSetComposeIncludeConceptDesignation,
  PrimitiveCode,
  PrimitiveString,
} from "../internal";

export class ValueSetComposeIncludeConceptDesignation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ValueSet.Compose.Include.Concept.Designation";

  public language?: PrimitiveCode;

  public use?: Coding;

  public value?: PrimitiveString;

  public static parse(
    json: IValueSetComposeIncludeConceptDesignation,
    providedInstance: ValueSetComposeIncludeConceptDesignation = new ValueSetComposeIncludeConceptDesignation()
  ): ValueSetComposeIncludeConceptDesignation {
    const newInstance: ValueSetComposeIncludeConceptDesignation = BackboneElement.parse(json, providedInstance);
  
    if (json.language) {
      newInstance.language = PrimitiveCode.parsePrimitive(json.language, json._language);
    }
    if (json.use) {
      newInstance.use = Coding.parse(json.use);
    }
    if (json.value) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    return newInstance;
  }

  public static isValueSetComposeIncludeConceptDesignation(input?: unknown): input is ValueSetComposeIncludeConceptDesignation {
    const castInput = input as ValueSetComposeIncludeConceptDesignation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ValueSetComposeIncludeConceptDesignation";
  }

  public toJSON(): IValueSetComposeIncludeConceptDesignation {
    const result: IValueSetComposeIncludeConceptDesignation = super.toJSON();

    if (this.language) {
      result.language = this.language.value;
      result._language = Extension.serializePrimitiveExtension(this.language);
    }

    if (this.use) {
      result.use = this.use.toJSON();
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ValueSetComposeIncludeConceptDesignation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
