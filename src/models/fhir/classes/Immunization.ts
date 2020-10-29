/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IImmunization,
  ImmunizationEducation,
  ImmunizationPerformer,
  ImmunizationProtocolApplied,
  ImmunizationReaction,
  ImmunizationStatus,
  PrimitiveBoolean,
  PrimitiveDate,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
  SimpleQuantity,
  FieldMetadata
} from "../internal";

export class Immunization extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Immunization";
  
  static readonly primaryCodePath: string | null = "vaccineCode";

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [ImmunizationStatus],
      isArray: false
    }, {
      fieldName: "statusReason",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "vaccineCode",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "patient",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "encounter",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "occurrence",
      fieldType: [PrimitiveDateTime, PrimitiveString],
      isArray: false
    }, {
      fieldName: "recorded",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "primarySource",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "reportOrigin",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "location",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "manufacturer",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "lotNumber",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "expirationDate",
      fieldType: [PrimitiveDate],
      isArray: false
    }, {
      fieldName: "site",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "route",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "doseQuantity",
      fieldType: [SimpleQuantity],
      isArray: false
    }, {
      fieldName: "performer",
      fieldType: [ImmunizationPerformer],
      isArray: true
    }, {
      fieldName: "note",
      fieldType: [Annotation],
      isArray: true
    }, {
      fieldName: "reasonCode",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "reasonReference",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "isSubpotent",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "subpotentReason",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "education",
      fieldType: [ImmunizationEducation],
      isArray: true
    }, {
      fieldName: "programEligibility",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "fundingSource",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "reaction",
      fieldType: [ImmunizationReaction],
      isArray: true
    }, {
      fieldName: "protocolApplied",
      fieldType: [ImmunizationProtocolApplied],
      isArray: true
    }];
  }

  public identifier?: Array<Identifier>;

  public status?: ImmunizationStatus;

  public statusReason?: CodeableConcept;

  public vaccineCode?: CodeableConcept;

  public patient?: Reference;

  public encounter?: Reference;

  public occurrence?: PrimitiveDateTime | PrimitiveString;

  public recorded?: PrimitiveDateTime;

  public primarySource?: PrimitiveBoolean;

  public reportOrigin?: CodeableConcept;

  public location?: Reference;

  public manufacturer?: Reference;

  public lotNumber?: PrimitiveString;

  public expirationDate?: PrimitiveDate;

  public site?: CodeableConcept;

  public route?: CodeableConcept;

  public doseQuantity?: SimpleQuantity;

  public performer?: Array<ImmunizationPerformer>;

  public note?: Array<Annotation>;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public isSubpotent?: PrimitiveBoolean;

  public subpotentReason?: Array<CodeableConcept>;

  public education?: Array<ImmunizationEducation>;

  public programEligibility?: Array<CodeableConcept>;

  public fundingSource?: CodeableConcept;

  public reaction?: Array<ImmunizationReaction>;

  public protocolApplied?: Array<ImmunizationProtocolApplied>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.vaccineCode;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.vaccineCode = primaryCode;
  }

  public static parse(
    json: IImmunization,
    providedInstance: Immunization = new Immunization()
  ): Immunization {
    const newInstance: Immunization = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = ImmunizationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReason !== undefined) {
      newInstance.statusReason = CodeableConcept.parse(json.statusReason);
    }
    if (json.vaccineCode !== undefined) {
      newInstance.vaccineCode = CodeableConcept.parse(json.vaccineCode);
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.occurrenceDateTime !== undefined) {
      newInstance.occurrence = PrimitiveDateTime.parsePrimitive(json.occurrenceDateTime, json._occurrenceDateTime);
    }
    if (json.occurrenceString !== undefined) {
      newInstance.occurrence = PrimitiveString.parsePrimitive(json.occurrenceString, json._occurrenceString);
    }
    if (json.recorded !== undefined) {
      newInstance.recorded = PrimitiveDateTime.parsePrimitive(json.recorded, json._recorded);
    }
    if (json.primarySource !== undefined) {
      newInstance.primarySource = PrimitiveBoolean.parsePrimitive(json.primarySource, json._primarySource);
    }
    if (json.reportOrigin !== undefined) {
      newInstance.reportOrigin = CodeableConcept.parse(json.reportOrigin);
    }
    if (json.location !== undefined) {
      newInstance.location = Reference.parse(json.location);
    }
    if (json.manufacturer !== undefined) {
      newInstance.manufacturer = Reference.parse(json.manufacturer);
    }
    if (json.lotNumber !== undefined) {
      newInstance.lotNumber = PrimitiveString.parsePrimitive(json.lotNumber, json._lotNumber);
    }
    if (json.expirationDate !== undefined) {
      newInstance.expirationDate = PrimitiveDate.parsePrimitive(json.expirationDate, json._expirationDate);
    }
    if (json.site !== undefined) {
      newInstance.site = CodeableConcept.parse(json.site);
    }
    if (json.route !== undefined) {
      newInstance.route = CodeableConcept.parse(json.route);
    }
    if (json.doseQuantity !== undefined) {
      newInstance.doseQuantity = SimpleQuantity.parse(json.doseQuantity);
    }
    if (json.performer !== undefined) {
      newInstance.performer = json.performer.map((x) => ImmunizationPerformer.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.isSubpotent !== undefined) {
      newInstance.isSubpotent = PrimitiveBoolean.parsePrimitive(json.isSubpotent, json._isSubpotent);
    }
    if (json.subpotentReason !== undefined) {
      newInstance.subpotentReason = json.subpotentReason.map((x) => CodeableConcept.parse(x));
    }
    if (json.education !== undefined) {
      newInstance.education = json.education.map((x) => ImmunizationEducation.parse(x));
    }
    if (json.programEligibility !== undefined) {
      newInstance.programEligibility = json.programEligibility.map((x) => CodeableConcept.parse(x));
    }
    if (json.fundingSource !== undefined) {
      newInstance.fundingSource = CodeableConcept.parse(json.fundingSource);
    }
    if (json.reaction !== undefined) {
      newInstance.reaction = json.reaction.map((x) => ImmunizationReaction.parse(x));
    }
    if (json.protocolApplied !== undefined) {
      newInstance.protocolApplied = json.protocolApplied.map((x) => ImmunizationProtocolApplied.parse(x));
    }
    return newInstance;
  }

  public static isImmunization(input?: unknown): input is Immunization {
    const castInput = input as Immunization;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Immunization";
  }

  public toJSON(): IImmunization {
    const result: IImmunization = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.statusReason) {
      result.statusReason = this.statusReason.toJSON();
    }

    if (this.vaccineCode) {
      result.vaccineCode = this.vaccineCode.toJSON();
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.occurrence && PrimitiveDateTime.isPrimitiveDateTime(this.occurrence)) {
      result.occurrenceDateTime = this.occurrence.value;
      result._occurrenceDateTime = Extension.serializePrimitiveExtension(this.occurrence);
    }

    if (this.occurrence && PrimitiveString.isPrimitiveString(this.occurrence)) {
      result.occurrenceString = this.occurrence.value;
      result._occurrenceString = Extension.serializePrimitiveExtension(this.occurrence);
    }

    if (this.recorded) {
      result.recorded = this.recorded.value;
      result._recorded = Extension.serializePrimitiveExtension(this.recorded);
    }

    if (this.primarySource) {
      result.primarySource = this.primarySource.value;
      result._primarySource = Extension.serializePrimitiveExtension(this.primarySource);
    }

    if (this.reportOrigin) {
      result.reportOrigin = this.reportOrigin.toJSON();
    }

    if (this.location) {
      result.location = this.location.toJSON();
    }

    if (this.manufacturer) {
      result.manufacturer = this.manufacturer.toJSON();
    }

    if (this.lotNumber) {
      result.lotNumber = this.lotNumber.value;
      result._lotNumber = Extension.serializePrimitiveExtension(this.lotNumber);
    }

    if (this.expirationDate) {
      result.expirationDate = this.expirationDate.value;
      result._expirationDate = Extension.serializePrimitiveExtension(this.expirationDate);
    }

    if (this.site) {
      result.site = this.site.toJSON();
    }

    if (this.route) {
      result.route = this.route.toJSON();
    }

    if (this.doseQuantity) {
      result.doseQuantity = this.doseQuantity.toJSON();
    }

    if (this.performer) {
      result.performer = this.performer.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.isSubpotent) {
      result.isSubpotent = this.isSubpotent.value;
      result._isSubpotent = Extension.serializePrimitiveExtension(this.isSubpotent);
    }

    if (this.subpotentReason) {
      result.subpotentReason = this.subpotentReason.map((x) => x.toJSON());
    }

    if (this.education) {
      result.education = this.education.map((x) => x.toJSON());
    }

    if (this.programEligibility) {
      result.programEligibility = this.programEligibility.map((x) => x.toJSON());
    }

    if (this.fundingSource) {
      result.fundingSource = this.fundingSource.toJSON();
    }

    if (this.reaction) {
      result.reaction = this.reaction.map((x) => x.toJSON());
    }

    if (this.protocolApplied) {
      result.protocolApplied = this.protocolApplied.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Immunization {
    return Immunization.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Immunization";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
