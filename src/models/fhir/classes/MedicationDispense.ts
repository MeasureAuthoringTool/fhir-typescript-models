/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  CodeableConcept,
  DomainResource,
  Dosage,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  Identifier,
  IMedicationDispense,
  MedicationDispensePerformer,
  MedicationDispenseStatus,
  MedicationDispenseSubstitution,
  PrimitiveDateTime,
  Reference,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("MedicationDispense", "DomainResource")
export class MedicationDispense extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationDispense";

  static readonly primaryCodePath: string | null = "medication";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirList("Reference")
  public partOf?: Array<Reference>;

  @FhirField("MedicationDispenseStatus")
  public status?: MedicationDispenseStatus;

  @FhirChoice("CodeableConcept", "Reference")
  public statusReason?: CodeableConcept | Reference;

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

  @FhirList("MedicationDispensePerformer")
  public performer?: Array<MedicationDispensePerformer>;

  @FhirField("Reference")
  public location?: Reference;

  @FhirList("Reference")
  public authorizingPrescription?: Array<Reference>;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("SimpleQuantity")
  public quantity?: SimpleQuantity;

  @FhirField("SimpleQuantity")
  public daysSupply?: SimpleQuantity;

  @FhirField("PrimitiveDateTime")
  public whenPrepared?: PrimitiveDateTime;

  @FhirField("PrimitiveDateTime")
  public whenHandedOver?: PrimitiveDateTime;

  @FhirField("Reference")
  public destination?: Reference;

  @FhirList("Reference")
  public receiver?: Array<Reference>;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  @FhirList("Dosage")
  public dosageInstruction?: Array<Dosage>;

  @FhirField("MedicationDispenseSubstitution")
  public substitution?: MedicationDispenseSubstitution;

  @FhirList("Reference")
  public detectedIssue?: Array<Reference>;

  @FhirList("Reference")
  public eventHistory?: Array<Reference>;

  get primaryCode(): CodeableConcept | Reference | undefined {
    return this?.medication;
  }

  set primaryCode(primaryCode: CodeableConcept | Reference | undefined) {
    this.medication = primaryCode;
  }

  public static parse(
    json: IMedicationDispense,
    providedInstance: MedicationDispense = new MedicationDispense()
  ): MedicationDispense {
    const newInstance: MedicationDispense = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.partOf !== undefined) {
      newInstance.partOf = json.partOf.map((x) => Reference.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = MedicationDispenseStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReasonCodeableConcept !== undefined) {
      newInstance.statusReason = CodeableConcept.parse(json.statusReasonCodeableConcept);
    }
    if (json.statusReasonReference !== undefined) {
      newInstance.statusReason = Reference.parse(json.statusReasonReference);
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
    if (json.performer !== undefined) {
      newInstance.performer = json.performer.map((x) => MedicationDispensePerformer.parse(x));
    }
    if (json.location !== undefined) {
      newInstance.location = Reference.parse(json.location);
    }
    if (json.authorizingPrescription !== undefined) {
      newInstance.authorizingPrescription = json.authorizingPrescription.map((x) => Reference.parse(x));
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.daysSupply !== undefined) {
      newInstance.daysSupply = SimpleQuantity.parse(json.daysSupply);
    }
    if (json.whenPrepared !== undefined) {
      newInstance.whenPrepared = PrimitiveDateTime.parsePrimitive(json.whenPrepared, json._whenPrepared);
    }
    if (json.whenHandedOver !== undefined) {
      newInstance.whenHandedOver = PrimitiveDateTime.parsePrimitive(json.whenHandedOver, json._whenHandedOver);
    }
    if (json.destination !== undefined) {
      newInstance.destination = Reference.parse(json.destination);
    }
    if (json.receiver !== undefined) {
      newInstance.receiver = json.receiver.map((x) => Reference.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.dosageInstruction !== undefined) {
      newInstance.dosageInstruction = json.dosageInstruction.map((x) => Dosage.parse(x));
    }
    if (json.substitution !== undefined) {
      newInstance.substitution = MedicationDispenseSubstitution.parse(json.substitution);
    }
    if (json.detectedIssue !== undefined) {
      newInstance.detectedIssue = json.detectedIssue.map((x) => Reference.parse(x));
    }
    if (json.eventHistory !== undefined) {
      newInstance.eventHistory = json.eventHistory.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isMedicationDispense(input?: unknown): input is MedicationDispense {
    const castInput = input as MedicationDispense;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationDispense";
  }

  public toJSON(): IMedicationDispense {
    const result: IMedicationDispense = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.partOf) {
      result.partOf = this.partOf.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.statusReason && CodeableConcept.isCodeableConcept(this.statusReason)) {
      result.statusReasonCodeableConcept = this.statusReason.toJSON();
    }

    if (this.statusReason && Reference.isReference(this.statusReason)) {
      result.statusReasonReference = this.statusReason.toJSON();
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

    if (this.performer) {
      result.performer = this.performer.map((x) => x.toJSON());
    }

    if (this.location) {
      result.location = this.location.toJSON();
    }

    if (this.authorizingPrescription) {
      result.authorizingPrescription = this.authorizingPrescription.map((x) => x.toJSON());
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.daysSupply) {
      result.daysSupply = this.daysSupply.toJSON();
    }

    if (this.whenPrepared) {
      result.whenPrepared = this.whenPrepared.value;
      result._whenPrepared = Extension.serializePrimitiveExtension(this.whenPrepared);
    }

    if (this.whenHandedOver) {
      result.whenHandedOver = this.whenHandedOver.value;
      result._whenHandedOver = Extension.serializePrimitiveExtension(this.whenHandedOver);
    }

    if (this.destination) {
      result.destination = this.destination.toJSON();
    }

    if (this.receiver) {
      result.receiver = this.receiver.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.dosageInstruction) {
      result.dosageInstruction = this.dosageInstruction.map((x) => x.toJSON());
    }

    if (this.substitution) {
      result.substitution = this.substitution.toJSON();
    }

    if (this.detectedIssue) {
      result.detectedIssue = this.detectedIssue.map((x) => x.toJSON());
    }

    if (this.eventHistory) {
      result.eventHistory = this.eventHistory.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicationDispense {
    return MedicationDispense.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationDispense";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
