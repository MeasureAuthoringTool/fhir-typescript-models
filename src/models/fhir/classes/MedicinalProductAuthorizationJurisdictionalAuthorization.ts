/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  Identifier,
  IMedicinalProductAuthorizationJurisdictionalAuthorization,
  Period,
  FhirType
} from "../internal";

@FhirType("MedicinalProductAuthorizationJurisdictionalAuthorization", "BackboneElement")
export class MedicinalProductAuthorizationJurisdictionalAuthorization extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductAuthorization.JurisdictionalAuthorization";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("CodeableConcept")
  public country?: CodeableConcept;

  @FhirList("CodeableConcept")
  public jurisdiction?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public legalStatusOfSupply?: CodeableConcept;

  @FhirField("Period")
  public validityPeriod?: Period;

  public static parse(
    json: IMedicinalProductAuthorizationJurisdictionalAuthorization,
    providedInstance: MedicinalProductAuthorizationJurisdictionalAuthorization = new MedicinalProductAuthorizationJurisdictionalAuthorization()
  ): MedicinalProductAuthorizationJurisdictionalAuthorization {
    const newInstance: MedicinalProductAuthorizationJurisdictionalAuthorization = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.country !== undefined) {
      newInstance.country = CodeableConcept.parse(json.country);
    }
    if (json.jurisdiction !== undefined) {
      newInstance.jurisdiction = json.jurisdiction.map((x) => CodeableConcept.parse(x));
    }
    if (json.legalStatusOfSupply !== undefined) {
      newInstance.legalStatusOfSupply = CodeableConcept.parse(json.legalStatusOfSupply);
    }
    if (json.validityPeriod !== undefined) {
      newInstance.validityPeriod = Period.parse(json.validityPeriod);
    }
    return newInstance;
  }

  public static isMedicinalProductAuthorizationJurisdictionalAuthorization(input?: unknown): input is MedicinalProductAuthorizationJurisdictionalAuthorization {
    const castInput = input as MedicinalProductAuthorizationJurisdictionalAuthorization;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductAuthorizationJurisdictionalAuthorization";
  }

  public toJSON(): IMedicinalProductAuthorizationJurisdictionalAuthorization {
    const result: IMedicinalProductAuthorizationJurisdictionalAuthorization = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.country) {
      result.country = this.country.toJSON();
    }

    if (this.jurisdiction) {
      result.jurisdiction = this.jurisdiction.map((x) => x.toJSON());
    }

    if (this.legalStatusOfSupply) {
      result.legalStatusOfSupply = this.legalStatusOfSupply.toJSON();
    }

    if (this.validityPeriod) {
      result.validityPeriod = this.validityPeriod.toJSON();
    }

    return result;
  }

  public clone(): MedicinalProductAuthorizationJurisdictionalAuthorization {
    return MedicinalProductAuthorizationJurisdictionalAuthorization.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductAuthorizationJurisdictionalAuthorization";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
