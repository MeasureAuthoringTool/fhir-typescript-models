/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  Identifier,
  IMedicationAdministration,
  MedicationAdministrationDosage,
  MedicationAdministrationPerformer,
  MedicationAdministrationStatus,
  Period,
  PrimitiveDateTime,
  PrimitiveUri,
  Reference,
  FhirType
} from "../internal";

@FhirType("MedicationAdministration", "DomainResource")
export class MedicationAdministration extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationAdministration";

  static readonly primaryCodePath: string | null = "medication";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirList("PrimitiveUri")
  public instantiates?: Array<PrimitiveUri>;

  @FhirList("Reference")
  public partOf?: Array<Reference>;

  @FhirField("MedicationAdministrationStatus")
  public status?: MedicationAdministrationStatus;

  @FhirList("CodeableConcept")
  public statusReason?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public category?: CodeableConcept;

  @FhirChoice("CodeableConcept", "Reference")
  public medication?: CodeableConcept | Reference;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("Reference")
  public context?: Reference;

  @FhirList("Reference")
  public supportingInformation?: Array<Reference>;

  @FhirChoice("PrimitiveDateTime", "Period")
  public effective?: PrimitiveDateTime | Period;

  @FhirList("MedicationAdministrationPerformer")
  public performer?: Array<MedicationAdministrationPerformer>;

  @FhirList("CodeableConcept")
  public reasonCode?: Array<CodeableConcept>;

  @FhirList("Reference")
  public reasonReference?: Array<Reference>;

  @FhirField("Reference")
  public request?: Reference;

  @FhirList("Reference")
  public device?: Array<Reference>;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  @FhirField("MedicationAdministrationDosage")
  public dosage?: MedicationAdministrationDosage;

  @FhirList("Reference")
  public eventHistory?: Array<Reference>;

  get primaryCode(): CodeableConcept | Reference | undefined {
    return this?.medication;
  }

  set primaryCode(primaryCode: CodeableConcept | Reference | undefined) {
    this.medication = primaryCode;
  }

  public static parse(
    json: IMedicationAdministration,
    providedInstance: MedicationAdministration = new MedicationAdministration()
  ): MedicationAdministration {
    const newInstance: MedicationAdministration = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.instantiates !== undefined) {
      newInstance.instantiates = json.instantiates.map((x, i) => PrimitiveUri.parsePrimitive(x, json._instantiates?.[i]));
    }
    if (json.partOf !== undefined) {
      newInstance.partOf = json.partOf.map((x) => Reference.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = MedicationAdministrationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReason !== undefined) {
      newInstance.statusReason = json.statusReason.map((x) => CodeableConcept.parse(x));
    }
    if (json.category !== undefined) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.medicationCodeableConcept !== undefined) {
      newInstance.medication = CodeableConcept.parse(json.medicationCodeableConcept);
    }
    if (json.medicationReference !== undefined) {
      newInstance.medication = Reference.parse(json.medicationReference);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.context !== undefined) {
      newInstance.context = Reference.parse(json.context);
    }
    if (json.supportingInformation !== undefined) {
      newInstance.supportingInformation = json.supportingInformation.map((x) => Reference.parse(x));
    }
    if (json.effectiveDateTime !== undefined) {
      newInstance.effective = PrimitiveDateTime.parsePrimitive(json.effectiveDateTime, json._effectiveDateTime);
    }
    if (json.effectivePeriod !== undefined) {
      newInstance.effective = Period.parse(json.effectivePeriod);
    }
    if (json.performer !== undefined) {
      newInstance.performer = json.performer.map((x) => MedicationAdministrationPerformer.parse(x));
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.request !== undefined) {
      newInstance.request = Reference.parse(json.request);
    }
    if (json.device !== undefined) {
      newInstance.device = json.device.map((x) => Reference.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.dosage !== undefined) {
      newInstance.dosage = MedicationAdministrationDosage.parse(json.dosage);
    }
    if (json.eventHistory !== undefined) {
      newInstance.eventHistory = json.eventHistory.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isMedicationAdministration(input?: unknown): input is MedicationAdministration {
    const castInput = input as MedicationAdministration;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationAdministration";
  }

  public toJSON(): IMedicationAdministration {
    const result: IMedicationAdministration = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.instantiates) {
      result.instantiates = this.instantiates.filter(x => !!x).map(x => x.value) as typeof result.instantiates;
      result._instantiates = Extension.serializePrimitiveExtensionArray(this.instantiates);
    }

    if (this.partOf) {
      result.partOf = this.partOf.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.statusReason) {
      result.statusReason = this.statusReason.map((x) => x.toJSON());
    }

    if (this.category) {
      result.category = this.category.toJSON();
    }

    if (this.medication && CodeableConcept.isCodeableConcept(this.medication)) {
      result.medicationCodeableConcept = this.medication.toJSON();
    }

    if (this.medication && Reference.isReference(this.medication)) {
      result.medicationReference = this.medication.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.context) {
      result.context = this.context.toJSON();
    }

    if (this.supportingInformation) {
      result.supportingInformation = this.supportingInformation.map((x) => x.toJSON());
    }

    if (this.effective && PrimitiveDateTime.isPrimitiveDateTime(this.effective)) {
      result.effectiveDateTime = this.effective.value;
      result._effectiveDateTime = Extension.serializePrimitiveExtension(this.effective);
    }

    if (this.effective && Period.isPeriod(this.effective)) {
      result.effectivePeriod = this.effective.toJSON();
    }

    if (this.performer) {
      result.performer = this.performer.map((x) => x.toJSON());
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.request) {
      result.request = this.request.toJSON();
    }

    if (this.device) {
      result.device = this.device.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.dosage) {
      result.dosage = this.dosage.toJSON();
    }

    if (this.eventHistory) {
      result.eventHistory = this.eventHistory.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicationAdministration {
    return MedicationAdministration.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationAdministration";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
