/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IMedicinalProductAuthorization,
  MedicinalProductAuthorizationJurisdictionalAuthorization,
  MedicinalProductAuthorizationProcedure,
  Period,
  PrimitiveDateTime,
  Reference,
  FhirType
} from "../internal";

@FhirType("MedicinalProductAuthorization", "DomainResource")
export class MedicinalProductAuthorization extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductAuthorization";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirList("CodeableConcept")
  public country?: Array<CodeableConcept>;

  @FhirList("CodeableConcept")
  public jurisdiction?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public status?: CodeableConcept;

  @FhirField("PrimitiveDateTime")
  public statusDate?: PrimitiveDateTime;

  @FhirField("PrimitiveDateTime")
  public restoreDate?: PrimitiveDateTime;

  @FhirField("Period")
  public validityPeriod?: Period;

  @FhirField("Period")
  public dataExclusivityPeriod?: Period;

  @FhirField("PrimitiveDateTime")
  public dateOfFirstAuthorization?: PrimitiveDateTime;

  @FhirField("PrimitiveDateTime")
  public internationalBirthDate?: PrimitiveDateTime;

  @FhirField("CodeableConcept")
  public legalBasis?: CodeableConcept;

  @FhirList("MedicinalProductAuthorizationJurisdictionalAuthorization")
  public jurisdictionalAuthorization?: Array<MedicinalProductAuthorizationJurisdictionalAuthorization>;

  @FhirField("Reference")
  public holder?: Reference;

  @FhirField("Reference")
  public regulator?: Reference;

  @FhirField("MedicinalProductAuthorizationProcedure")
  public procedure?: MedicinalProductAuthorizationProcedure;

  public static parse(
    json: IMedicinalProductAuthorization,
    providedInstance: MedicinalProductAuthorization = new MedicinalProductAuthorization()
  ): MedicinalProductAuthorization {
    const newInstance: MedicinalProductAuthorization = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.country !== undefined) {
      newInstance.country = json.country.map((x) => CodeableConcept.parse(x));
    }
    if (json.jurisdiction !== undefined) {
      newInstance.jurisdiction = json.jurisdiction.map((x) => CodeableConcept.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = CodeableConcept.parse(json.status);
    }
    if (json.statusDate !== undefined) {
      newInstance.statusDate = PrimitiveDateTime.parsePrimitive(json.statusDate, json._statusDate);
    }
    if (json.restoreDate !== undefined) {
      newInstance.restoreDate = PrimitiveDateTime.parsePrimitive(json.restoreDate, json._restoreDate);
    }
    if (json.validityPeriod !== undefined) {
      newInstance.validityPeriod = Period.parse(json.validityPeriod);
    }
    if (json.dataExclusivityPeriod !== undefined) {
      newInstance.dataExclusivityPeriod = Period.parse(json.dataExclusivityPeriod);
    }
    if (json.dateOfFirstAuthorization !== undefined) {
      newInstance.dateOfFirstAuthorization = PrimitiveDateTime.parsePrimitive(json.dateOfFirstAuthorization, json._dateOfFirstAuthorization);
    }
    if (json.internationalBirthDate !== undefined) {
      newInstance.internationalBirthDate = PrimitiveDateTime.parsePrimitive(json.internationalBirthDate, json._internationalBirthDate);
    }
    if (json.legalBasis !== undefined) {
      newInstance.legalBasis = CodeableConcept.parse(json.legalBasis);
    }
    if (json.jurisdictionalAuthorization !== undefined) {
      newInstance.jurisdictionalAuthorization = json.jurisdictionalAuthorization.map((x) => MedicinalProductAuthorizationJurisdictionalAuthorization.parse(x));
    }
    if (json.holder !== undefined) {
      newInstance.holder = Reference.parse(json.holder);
    }
    if (json.regulator !== undefined) {
      newInstance.regulator = Reference.parse(json.regulator);
    }
    if (json.procedure !== undefined) {
      newInstance.procedure = MedicinalProductAuthorizationProcedure.parse(json.procedure);
    }
    return newInstance;
  }

  public static isMedicinalProductAuthorization(input?: unknown): input is MedicinalProductAuthorization {
    const castInput = input as MedicinalProductAuthorization;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductAuthorization";
  }

  public toJSON(): IMedicinalProductAuthorization {
    const result: IMedicinalProductAuthorization = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.country) {
      result.country = this.country.map((x) => x.toJSON());
    }

    if (this.jurisdiction) {
      result.jurisdiction = this.jurisdiction.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.toJSON();
    }

    if (this.statusDate) {
      result.statusDate = this.statusDate.value;
      result._statusDate = Extension.serializePrimitiveExtension(this.statusDate);
    }

    if (this.restoreDate) {
      result.restoreDate = this.restoreDate.value;
      result._restoreDate = Extension.serializePrimitiveExtension(this.restoreDate);
    }

    if (this.validityPeriod) {
      result.validityPeriod = this.validityPeriod.toJSON();
    }

    if (this.dataExclusivityPeriod) {
      result.dataExclusivityPeriod = this.dataExclusivityPeriod.toJSON();
    }

    if (this.dateOfFirstAuthorization) {
      result.dateOfFirstAuthorization = this.dateOfFirstAuthorization.value;
      result._dateOfFirstAuthorization = Extension.serializePrimitiveExtension(this.dateOfFirstAuthorization);
    }

    if (this.internationalBirthDate) {
      result.internationalBirthDate = this.internationalBirthDate.value;
      result._internationalBirthDate = Extension.serializePrimitiveExtension(this.internationalBirthDate);
    }

    if (this.legalBasis) {
      result.legalBasis = this.legalBasis.toJSON();
    }

    if (this.jurisdictionalAuthorization) {
      result.jurisdictionalAuthorization = this.jurisdictionalAuthorization.map((x) => x.toJSON());
    }

    if (this.holder) {
      result.holder = this.holder.toJSON();
    }

    if (this.regulator) {
      result.regulator = this.regulator.toJSON();
    }

    if (this.procedure) {
      result.procedure = this.procedure.toJSON();
    }

    return result;
  }

  public clone(): MedicinalProductAuthorization {
    return MedicinalProductAuthorization.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductAuthorization";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
