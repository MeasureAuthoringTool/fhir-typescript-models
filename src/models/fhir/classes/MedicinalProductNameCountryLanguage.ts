/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  IMedicinalProductNameCountryLanguage,
  FhirType
} from "../internal";

@FhirType("MedicinalProductNameCountryLanguage", "BackboneElement")
export class MedicinalProductNameCountryLanguage extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProduct.Name.CountryLanguage";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public country?: CodeableConcept;

  @FhirField("CodeableConcept")
  public jurisdiction?: CodeableConcept;

  @FhirField("CodeableConcept")
  public language?: CodeableConcept;

  public static parse(
    json: IMedicinalProductNameCountryLanguage,
    providedInstance: MedicinalProductNameCountryLanguage = new MedicinalProductNameCountryLanguage()
  ): MedicinalProductNameCountryLanguage {
    const newInstance: MedicinalProductNameCountryLanguage = BackboneElement.parse(json, providedInstance);
  
    if (json.country !== undefined) {
      newInstance.country = CodeableConcept.parse(json.country);
    }
    if (json.jurisdiction !== undefined) {
      newInstance.jurisdiction = CodeableConcept.parse(json.jurisdiction);
    }
    if (json.language !== undefined) {
      newInstance.language = CodeableConcept.parse(json.language);
    }
    return newInstance;
  }

  public static isMedicinalProductNameCountryLanguage(input?: unknown): input is MedicinalProductNameCountryLanguage {
    const castInput = input as MedicinalProductNameCountryLanguage;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductNameCountryLanguage";
  }

  public toJSON(): IMedicinalProductNameCountryLanguage {
    const result: IMedicinalProductNameCountryLanguage = super.toJSON();

    if (this.country) {
      result.country = this.country.toJSON();
    }

    if (this.jurisdiction) {
      result.jurisdiction = this.jurisdiction.toJSON();
    }

    if (this.language) {
      result.language = this.language.toJSON();
    }

    return result;
  }

  public clone(): MedicinalProductNameCountryLanguage {
    return MedicinalProductNameCountryLanguage.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductNameCountryLanguage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
