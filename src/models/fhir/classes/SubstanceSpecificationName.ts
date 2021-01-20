/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  ISubstanceSpecificationName,
  PrimitiveBoolean,
  PrimitiveString,
  Reference,
  SubstanceSpecificationNameOfficial,
  FhirType
} from "../internal";

@FhirType("SubstanceSpecificationName", "BackboneElement")
export class SubstanceSpecificationName extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSpecification.Name";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("CodeableConcept")
  public status?: CodeableConcept;

  @FhirField("PrimitiveBoolean")
  public preferred?: PrimitiveBoolean;

  @FhirList("CodeableConcept")
  public language?: Array<CodeableConcept>;

  @FhirList("CodeableConcept")
  public domain?: Array<CodeableConcept>;

  @FhirList("CodeableConcept")
  public jurisdiction?: Array<CodeableConcept>;

  @FhirList("SubstanceSpecificationName")
  public synonym?: Array<SubstanceSpecificationName>;

  @FhirList("SubstanceSpecificationName")
  public translation?: Array<SubstanceSpecificationName>;

  @FhirList("SubstanceSpecificationNameOfficial")
  public official?: Array<SubstanceSpecificationNameOfficial>;

  @FhirList("Reference")
  public source?: Array<Reference>;

  public static parse(
    json: ISubstanceSpecificationName,
    providedInstance: SubstanceSpecificationName = new SubstanceSpecificationName()
  ): SubstanceSpecificationName {
    const newInstance: SubstanceSpecificationName = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.status !== undefined) {
      newInstance.status = CodeableConcept.parse(json.status);
    }
    if (json.preferred !== undefined) {
      newInstance.preferred = PrimitiveBoolean.parsePrimitive(json.preferred, json._preferred);
    }
    if (json.language !== undefined) {
      newInstance.language = json.language.map((x) => CodeableConcept.parse(x));
    }
    if (json.domain !== undefined) {
      newInstance.domain = json.domain.map((x) => CodeableConcept.parse(x));
    }
    if (json.jurisdiction !== undefined) {
      newInstance.jurisdiction = json.jurisdiction.map((x) => CodeableConcept.parse(x));
    }
    if (json.synonym !== undefined) {
      newInstance.synonym = json.synonym.map((x) => SubstanceSpecificationName.parse(x));
    }
    if (json.translation !== undefined) {
      newInstance.translation = json.translation.map((x) => SubstanceSpecificationName.parse(x));
    }
    if (json.official !== undefined) {
      newInstance.official = json.official.map((x) => SubstanceSpecificationNameOfficial.parse(x));
    }
    if (json.source !== undefined) {
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

  public clone(): SubstanceSpecificationName {
    return SubstanceSpecificationName.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceSpecificationName";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
