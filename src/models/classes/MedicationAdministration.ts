/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IMedicationAdministration,
  MedicationAdministrationDosage,
  MedicationAdministrationPerformer,
  MedicationAdministrationStatus,
  Period,
  PrimitiveDateTime,
  PrimitiveUri,
  Reference,
} from "../internal";

export class MedicationAdministration extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationAdministration";

  public identifier?: Array<Identifier>;

  public instantiates?: Array<PrimitiveUri>;

  public partOf?: Array<Reference>;

  public status?: MedicationAdministrationStatus;

  public statusReason?: Array<CodeableConcept>;

  public category?: CodeableConcept;

  public medication?: CodeableConcept | Reference;

  public subject?: Reference;

  public context?: Reference;

  public supportingInformation?: Array<Reference>;

  public effective?: PrimitiveDateTime | Period;

  public performer?: Array<MedicationAdministrationPerformer>;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public request?: Reference;

  public device?: Array<Reference>;

  public note?: Array<Annotation>;

  public dosage?: MedicationAdministrationDosage;

  public eventHistory?: Array<Reference>;

  public static parse(
    json: IMedicationAdministration,
    providedInstance: MedicationAdministration = new MedicationAdministration()
  ): MedicationAdministration {
    const newInstance: MedicationAdministration = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.instantiates) {
      newInstance.instantiates = json.instantiates.map((x, i) => {
        const ext = json._instantiates && json._instantiates[i];
        return PrimitiveUri.parsePrimitive(x, ext);
      });
    }
    if (json.partOf) {
      newInstance.partOf = json.partOf.map((x) => Reference.parse(x));
    }
    if (json.status) {
      newInstance.status = MedicationAdministrationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReason) {
      newInstance.statusReason = json.statusReason.map((x) => CodeableConcept.parse(x));
    }
    if (json.category) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.medicationCodeableConcept) {
      newInstance.medication = CodeableConcept.parse(json.medicationCodeableConcept);
    }
    if (json.medicationReference) {
      newInstance.medication = Reference.parse(json.medicationReference);
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.context) {
      newInstance.context = Reference.parse(json.context);
    }
    if (json.supportingInformation) {
      newInstance.supportingInformation = json.supportingInformation.map((x) => Reference.parse(x));
    }
    if (json.effectiveDateTime) {
      newInstance.effective = PrimitiveDateTime.parsePrimitive(json.effectiveDateTime, json._effectiveDateTime);
    }
    if (json.effectivePeriod) {
      newInstance.effective = Period.parse(json.effectivePeriod);
    }
    if (json.performer) {
      newInstance.performer = json.performer.map((x) => MedicationAdministrationPerformer.parse(x));
    }
    if (json.reasonCode) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.request) {
      newInstance.request = Reference.parse(json.request);
    }
    if (json.device) {
      newInstance.device = json.device.map((x) => Reference.parse(x));
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.dosage) {
      newInstance.dosage = MedicationAdministrationDosage.parse(json.dosage);
    }
    if (json.eventHistory) {
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
  
  public getTypeName(): string {
    return "MedicationAdministration";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
