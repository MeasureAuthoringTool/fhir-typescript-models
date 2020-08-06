/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IMedicinalProductAuthorization,
  MedicinalProductAuthorizationJurisdictionalAuthorization,
  MedicinalProductAuthorizationProcedure,
  Period,
  PrimitiveDateTime,
  Reference,
} from "../internal";

export class MedicinalProductAuthorization extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductAuthorization";

  public identifier?: Array<Identifier>;

  public subject?: Reference;

  public country?: Array<CodeableConcept>;

  public jurisdiction?: Array<CodeableConcept>;

  public status?: CodeableConcept;

  public statusDate?: PrimitiveDateTime;

  public restoreDate?: PrimitiveDateTime;

  public validityPeriod?: Period;

  public dataExclusivityPeriod?: Period;

  public dateOfFirstAuthorization?: PrimitiveDateTime;

  public internationalBirthDate?: PrimitiveDateTime;

  public legalBasis?: CodeableConcept;

  public jurisdictionalAuthorization?: Array<MedicinalProductAuthorizationJurisdictionalAuthorization>;

  public holder?: Reference;

  public regulator?: Reference;

  public procedure?: MedicinalProductAuthorizationProcedure;

  public static parse(
    json: IMedicinalProductAuthorization,
    providedInstance: MedicinalProductAuthorization = new MedicinalProductAuthorization()
  ): MedicinalProductAuthorization {
    const newInstance: MedicinalProductAuthorization = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.country) {
      newInstance.country = json.country.map((x) => CodeableConcept.parse(x));
    }
    if (json.jurisdiction) {
      newInstance.jurisdiction = json.jurisdiction.map((x) => CodeableConcept.parse(x));
    }
    if (json.status) {
      newInstance.status = CodeableConcept.parse(json.status);
    }
    if (json.statusDate) {
      newInstance.statusDate = PrimitiveDateTime.parsePrimitive(json.statusDate, json._statusDate);
    }
    if (json.restoreDate) {
      newInstance.restoreDate = PrimitiveDateTime.parsePrimitive(json.restoreDate, json._restoreDate);
    }
    if (json.validityPeriod) {
      newInstance.validityPeriod = Period.parse(json.validityPeriod);
    }
    if (json.dataExclusivityPeriod) {
      newInstance.dataExclusivityPeriod = Period.parse(json.dataExclusivityPeriod);
    }
    if (json.dateOfFirstAuthorization) {
      newInstance.dateOfFirstAuthorization = PrimitiveDateTime.parsePrimitive(json.dateOfFirstAuthorization, json._dateOfFirstAuthorization);
    }
    if (json.internationalBirthDate) {
      newInstance.internationalBirthDate = PrimitiveDateTime.parsePrimitive(json.internationalBirthDate, json._internationalBirthDate);
    }
    if (json.legalBasis) {
      newInstance.legalBasis = CodeableConcept.parse(json.legalBasis);
    }
    if (json.jurisdictionalAuthorization) {
      newInstance.jurisdictionalAuthorization = json.jurisdictionalAuthorization.map((x) => MedicinalProductAuthorizationJurisdictionalAuthorization.parse(x));
    }
    if (json.holder) {
      newInstance.holder = Reference.parse(json.holder);
    }
    if (json.regulator) {
      newInstance.regulator = Reference.parse(json.regulator);
    }
    if (json.procedure) {
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
  
  public getTypeName(): string {
    return "MedicinalProductAuthorization";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
