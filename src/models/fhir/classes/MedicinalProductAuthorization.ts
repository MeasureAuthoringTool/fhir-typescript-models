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
  FieldMetadata
} from "../internal";

export class MedicinalProductAuthorization extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductAuthorization";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "subject",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "country",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "jurisdiction",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "statusDate",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "restoreDate",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "validityPeriod",
      fieldType: [Period],
      isArray: false
    }, {
      fieldName: "dataExclusivityPeriod",
      fieldType: [Period],
      isArray: false
    }, {
      fieldName: "dateOfFirstAuthorization",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "internationalBirthDate",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "legalBasis",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "jurisdictionalAuthorization",
      fieldType: [MedicinalProductAuthorizationJurisdictionalAuthorization],
      isArray: true
    }, {
      fieldName: "holder",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "regulator",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "procedure",
      fieldType: [MedicinalProductAuthorizationProcedure],
      isArray: false
    }];
  }

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
