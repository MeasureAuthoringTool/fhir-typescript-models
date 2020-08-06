/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  ISubstanceSpecificationName,
  PrimitiveBoolean,
  PrimitiveString,
  Reference,
  SubstanceSpecificationNameOfficial,
} from "../internal";

export class SubstanceSpecificationName extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSpecification.Name";

  public name?: PrimitiveString;

  public type?: CodeableConcept;

  public status?: CodeableConcept;

  public preferred?: PrimitiveBoolean;

  public language?: Array<CodeableConcept>;

  public domain?: Array<CodeableConcept>;

  public jurisdiction?: Array<CodeableConcept>;

  public synonym?: Array<SubstanceSpecificationName>;

  public translation?: Array<SubstanceSpecificationName>;

  public official?: Array<SubstanceSpecificationNameOfficial>;

  public source?: Array<Reference>;

  public static parse(
    json: ISubstanceSpecificationName,
    providedInstance: SubstanceSpecificationName = new SubstanceSpecificationName()
  ): SubstanceSpecificationName {
    const newInstance: SubstanceSpecificationName = BackboneElement.parse(json, providedInstance);
  
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.status) {
      newInstance.status = CodeableConcept.parse(json.status);
    }
    if (json.preferred) {
      newInstance.preferred = PrimitiveBoolean.parsePrimitive(json.preferred, json._preferred);
    }
    if (json.language) {
      newInstance.language = json.language.map((x) => CodeableConcept.parse(x));
    }
    if (json.domain) {
      newInstance.domain = json.domain.map((x) => CodeableConcept.parse(x));
    }
    if (json.jurisdiction) {
      newInstance.jurisdiction = json.jurisdiction.map((x) => CodeableConcept.parse(x));
    }
    if (json.synonym) {
      newInstance.synonym = json.synonym.map((x) => SubstanceSpecificationName.parse(x));
    }
    if (json.translation) {
      newInstance.translation = json.translation.map((x) => SubstanceSpecificationName.parse(x));
    }
    if (json.official) {
      newInstance.official = json.official.map((x) => SubstanceSpecificationNameOfficial.parse(x));
    }
    if (json.source) {
      newInstance.source = json.source.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isSubstanceSpecificationName(input?: unknown): input is SubstanceSpecificationName {
    const castInput = input as SubstanceSpecificationName;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSpecificationName";
  }

  public toJSON(): ISubstanceSpecificationName {
    const result: ISubstanceSpecificationName = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.status) {
      result.status = this.status.toJSON();
    }

    if (this.preferred) {
      result.preferred = this.preferred.value;
      result._preferred = Extension.serializePrimitiveExtension(this.preferred);
    }

    if (this.language) {
      result.language = this.language.map((x) => x.toJSON());
    }

    if (this.domain) {
      result.domain = this.domain.map((x) => x.toJSON());
    }

    if (this.jurisdiction) {
      result.jurisdiction = this.jurisdiction.map((x) => x.toJSON());
    }

    if (this.synonym) {
      result.synonym = this.synonym.map((x) => x.toJSON());
    }

    if (this.translation) {
      result.translation = this.translation.map((x) => x.toJSON());
    }

    if (this.official) {
      result.official = this.official.map((x) => x.toJSON());
    }

    if (this.source) {
      result.source = this.source.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "SubstanceSpecificationName";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
