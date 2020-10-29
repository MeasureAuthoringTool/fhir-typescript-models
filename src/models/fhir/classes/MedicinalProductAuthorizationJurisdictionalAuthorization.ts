/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Identifier,
  IMedicinalProductAuthorizationJurisdictionalAuthorization,
  Period,
  FieldMetadata
} from "../internal";

export class MedicinalProductAuthorizationJurisdictionalAuthorization extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductAuthorization.JurisdictionalAuthorization";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "country",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "jurisdiction",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "legalStatusOfSupply",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "validityPeriod",
      fieldType: [Period],
      isArray: false
    }];
  }

  public identifier?: Array<Identifier>;

  public country?: CodeableConcept;

  public jurisdiction?: Array<CodeableConcept>;

  public legalStatusOfSupply?: CodeableConcept;

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
