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
  IMedicationRequest,
  MedicationRequestDispenseRequest,
  MedicationRequestIntent,
  MedicationRequestPriority,
  MedicationRequestStatus,
  MedicationRequestSubstitution,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveUri,
  Reference,
  FhirType
} from "../internal";

@FhirType("MedicationRequest", "DomainResource")
export class MedicationRequest extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationRequest";

  static readonly primaryCodePath: string | null = "medication";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("MedicationRequestStatus")
  public status?: MedicationRequestStatus;

  @FhirField("CodeableConcept")
  public statusReason?: CodeableConcept;

  @FhirField("MedicationRequestIntent")
  public intent?: MedicationRequestIntent;

  @FhirList("CodeableConcept")
  public category?: Array<CodeableConcept>;

  @FhirField("MedicationRequestPriority")
  public priority?: MedicationRequestPriority;

  @FhirField("PrimitiveBoolean")
  public doNotPerform?: PrimitiveBoolean;

  @FhirChoice("PrimitiveBoolean", "Reference")
  public reported?: PrimitiveBoolean | Reference;

  @FhirChoice("CodeableConcept", "Reference")
  public medication?: CodeableConcept | Reference;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("Reference")
  public encounter?: Reference;

  @FhirList("Reference")
  public supportingInformation?: Array<Reference>;

  @FhirField("PrimitiveDateTime")
  public authoredOn?: PrimitiveDateTime;

  @FhirField("Reference")
  public requester?: Reference;

  @FhirField("Reference")
  public performer?: Reference;

  @FhirField("CodeableConcept")
  public performerType?: CodeableConcept;

  @FhirField("Reference")
  public recorder?: Reference;

  @FhirList("CodeableConcept")
  public reasonCode?: Array<CodeableConcept>;

  @FhirList("Reference")
  public reasonReference?: Array<Reference>;

  @FhirList("PrimitiveCanonical")
  public instantiatesCanonical?: Array<PrimitiveCanonical>;

  @FhirList("PrimitiveUri")
  public instantiatesUri?: Array<PrimitiveUri>;

  @FhirList("Reference")
  public basedOn?: Array<Reference>;

  @FhirField("Identifier")
  public groupIdentifier?: Identifier;

  @FhirField("CodeableConcept")
  public courseOfTherapyType?: CodeableConcept;

  @FhirList("Reference")
  public insurance?: Array<Reference>;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  @FhirList("Dosage")
  public dosageInstruction?: Array<Dosage>;

  @FhirField("MedicationRequestDispenseRequest")
  public dispenseRequest?: MedicationRequestDispenseRequest;

  @FhirField("MedicationRequestSubstitution")
  public substitution?: MedicationRequestSubstitution;

  @FhirField("Reference")
  public priorPrescription?: Reference;

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
    json: IMedicationRequest,
    providedInstance: MedicationRequest = new MedicationRequest()
  ): MedicationRequest {
    const newInstance: MedicationRequest = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = MedicationRequestStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReason !== undefined) {
      newInstance.statusReason = CodeableConcept.parse(json.statusReason);
    }
    if (json.intent !== undefined) {
      newInstance.intent = MedicationRequestIntent.parsePrimitive(json.intent, json._intent);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.priority !== undefined) {
      newInstance.priority = MedicationRequestPriority.parsePrimitive(json.priority, json._priority);
    }
    if (json.doNotPerform !== undefined) {
      newInstance.doNotPerform = PrimitiveBoolean.parsePrimitive(json.doNotPerform, json._doNotPerform);
    }
    if (json.reportedBoolean !== undefined) {
      newInstance.reported = PrimitiveBoolean.parsePrimitive(json.reportedBoolean, json._reportedBoolean);
    }
    if (json.reportedReference !== undefined) {
      newInstance.reported = Reference.parse(json.reportedReference);
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
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.supportingInformation !== undefined) {
      newInstance.supportingInformation = json.supportingInformation.map((x) => Reference.parse(x));
    }
    if (json.authoredOn !== undefined) {
      newInstance.authoredOn = PrimitiveDateTime.parsePrimitive(json.authoredOn, json._authoredOn);
    }
    if (json.requester !== undefined) {
      newInstance.requester = Reference.parse(json.requester);
    }
    if (json.performer !== undefined) {
      newInstance.performer = Reference.parse(json.performer);
    }
    if (json.performerType !== undefined) {
      newInstance.performerType = CodeableConcept.parse(json.performerType);
    }
    if (json.recorder !== undefined) {
      newInstance.recorder = Reference.parse(json.recorder);
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.instantiatesCanonical !== undefined) {
      newInstance.instantiatesCanonical = json.instantiatesCanonical.map((x, i) => PrimitiveCanonical.parsePrimitive(x, json._instantiatesCanonical?.[i]));
    }
    if (json.instantiatesUri !== undefined) {
      newInstance.instantiatesUri = json.instantiatesUri.map((x, i) => PrimitiveUri.parsePrimitive(x, json._instantiatesUri?.[i]));
    }
    if (json.basedOn !== undefined) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.groupIdentifier !== undefined) {
      newInstance.groupIdentifier = Identifier.parse(json.groupIdentifier);
    }
    if (json.courseOfTherapyType !== undefined) {
      newInstance.courseOfTherapyType = CodeableConcept.parse(json.courseOfTherapyType);
    }
    if (json.insurance !== undefined) {
      newInstance.insurance = json.insurance.map((x) => Reference.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.dosageInstruction !== undefined) {
      newInstance.dosageInstruction = json.dosageInstruction.map((x) => Dosage.parse(x));
    }
    if (json.dispenseRequest !== undefined) {
      newInstance.dispenseRequest = MedicationRequestDispenseRequest.parse(json.dispenseRequest);
    }
    if (json.substitution !== undefined) {
      newInstance.substitution = MedicationRequestSubstitution.parse(json.substitution);
    }
    if (json.priorPrescription !== undefined) {
      newInstance.priorPrescription = Reference.parse(json.priorPrescription);
    }
    if (json.detectedIssue !== undefined) {
      newInstance.detectedIssue = json.detectedIssue.map((x) => Reference.parse(x));
    }
    if (json.eventHistory !== undefined) {
      newInstance.eventHistory = json.eventHistory.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isMedicationRequest(input?: unknown): input is MedicationRequest {
    const castInput = input as MedicationRequest;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationRequest";
  }

  public toJSON(): IMedicationRequest {
    const result: IMedicationRequest = super.toJSON();

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

    if (this.intent) {
      result.intent = this.intent.value;
      result._intent = Extension.serializePrimitiveExtension(this.intent);
    }

    if (this.category) {
      result.category = this.category.map((x) => x.toJSON());
    }

    if (this.priority) {
      result.priority = this.priority.value;
      result._priority = Extension.serializePrimitiveExtension(this.priority);
    }

    if (this.doNotPerform) {
      result.doNotPerform = this.doNotPerform.value;
      result._doNotPerform = Extension.serializePrimitiveExtension(this.doNotPerform);
    }

    if (this.reported && PrimitiveBoolean.isPrimitiveBoolean(this.reported)) {
      result.reportedBoolean = this.reported.value;
      result._reportedBoolean = Extension.serializePrimitiveExtension(this.reported);
    }

    if (this.reported && Reference.isReference(this.reported)) {
      result.reportedReference = this.reported.toJSON();
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

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.supportingInformation) {
      result.supportingInformation = this.supportingInformation.map((x) => x.toJSON());
    }

    if (this.authoredOn) {
      result.authoredOn = this.authoredOn.value;
      result._authoredOn = Extension.serializePrimitiveExtension(this.authoredOn);
    }

    if (this.requester) {
      result.requester = this.requester.toJSON();
    }

    if (this.performer) {
      result.performer = this.performer.toJSON();
    }

    if (this.performerType) {
      result.performerType = this.performerType.toJSON();
    }

    if (this.recorder) {
      result.recorder = this.recorder.toJSON();
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.instantiatesCanonical) {
      result.instantiatesCanonical = this.instantiatesCanonical.filter(x => !!x).map(x => x.value) as typeof result.instantiatesCanonical;
      result._instantiatesCanonical = Extension.serializePrimitiveExtensionArray(this.instantiatesCanonical);
    }

    if (this.instantiatesUri) {
      result.instantiatesUri = this.instantiatesUri.filter(x => !!x).map(x => x.value) as typeof result.instantiatesUri;
      result._instantiatesUri = Extension.serializePrimitiveExtensionArray(this.instantiatesUri);
    }

    if (this.basedOn) {
      result.basedOn = this.basedOn.map((x) => x.toJSON());
    }

    if (this.groupIdentifier) {
      result.groupIdentifier = this.groupIdentifier.toJSON();
    }

    if (this.courseOfTherapyType) {
      result.courseOfTherapyType = this.courseOfTherapyType.toJSON();
    }

    if (this.insurance) {
      result.insurance = this.insurance.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.dosageInstruction) {
      result.dosageInstruction = this.dosageInstruction.map((x) => x.toJSON());
    }

    if (this.dispenseRequest) {
      result.dispenseRequest = this.dispenseRequest.toJSON();
    }

    if (this.substitution) {
      result.substitution = this.substitution.toJSON();
    }

    if (this.priorPrescription) {
      result.priorPrescription = this.priorPrescription.toJSON();
    }

    if (this.detectedIssue) {
      result.detectedIssue = this.detectedIssue.map((x) => x.toJSON());
    }

    if (this.eventHistory) {
      result.eventHistory = this.eventHistory.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicationRequest {
    return MedicationRequest.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationRequest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
