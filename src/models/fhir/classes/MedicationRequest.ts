/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  DomainResource,
  Dosage,
  Extension,
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
} from "../internal";

export class MedicationRequest extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationRequest";

  public identifier?: Array<Identifier>;

  public status?: MedicationRequestStatus;

  public statusReason?: CodeableConcept;

  public intent?: MedicationRequestIntent;

  public category?: Array<CodeableConcept>;

  public priority?: MedicationRequestPriority;

  public doNotPerform?: PrimitiveBoolean;

  public reported?: PrimitiveBoolean | Reference;

  public medication?: CodeableConcept | Reference;

  public subject?: Reference;

  public encounter?: Reference;

  public supportingInformation?: Array<Reference>;

  public authoredOn?: PrimitiveDateTime;

  public requester?: Reference;

  public performer?: Reference;

  public performerType?: CodeableConcept;

  public recorder?: Reference;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public instantiatesCanonical?: Array<PrimitiveCanonical>;

  public instantiatesUri?: Array<PrimitiveUri>;

  public basedOn?: Array<Reference>;

  public groupIdentifier?: Identifier;

  public courseOfTherapyType?: CodeableConcept;

  public insurance?: Array<Reference>;

  public note?: Array<Annotation>;

  public dosageInstruction?: Array<Dosage>;

  public dispenseRequest?: MedicationRequestDispenseRequest;

  public substitution?: MedicationRequestSubstitution;

  public priorPrescription?: Reference;

  public detectedIssue?: Array<Reference>;

  public eventHistory?: Array<Reference>;

  public static parse(
    json: IMedicationRequest,
    providedInstance: MedicationRequest = new MedicationRequest()
  ): MedicationRequest {
    const newInstance: MedicationRequest = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status) {
      newInstance.status = MedicationRequestStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReason) {
      newInstance.statusReason = CodeableConcept.parse(json.statusReason);
    }
    if (json.intent) {
      newInstance.intent = MedicationRequestIntent.parsePrimitive(json.intent, json._intent);
    }
    if (json.category) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.priority) {
      newInstance.priority = MedicationRequestPriority.parsePrimitive(json.priority, json._priority);
    }
    if (json.doNotPerform) {
      newInstance.doNotPerform = PrimitiveBoolean.parsePrimitive(json.doNotPerform, json._doNotPerform);
    }
    if (json.reportedBoolean) {
      newInstance.reported = PrimitiveBoolean.parsePrimitive(json.reportedBoolean, json._reportedBoolean);
    }
    if (json.reportedReference) {
      newInstance.reported = Reference.parse(json.reportedReference);
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
    if (json.encounter) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.supportingInformation) {
      newInstance.supportingInformation = json.supportingInformation.map((x) => Reference.parse(x));
    }
    if (json.authoredOn) {
      newInstance.authoredOn = PrimitiveDateTime.parsePrimitive(json.authoredOn, json._authoredOn);
    }
    if (json.requester) {
      newInstance.requester = Reference.parse(json.requester);
    }
    if (json.performer) {
      newInstance.performer = Reference.parse(json.performer);
    }
    if (json.performerType) {
      newInstance.performerType = CodeableConcept.parse(json.performerType);
    }
    if (json.recorder) {
      newInstance.recorder = Reference.parse(json.recorder);
    }
    if (json.reasonCode) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.instantiatesCanonical) {
      newInstance.instantiatesCanonical = json.instantiatesCanonical.map((x, i) => {
        const ext = json._instantiatesCanonical && json._instantiatesCanonical[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    if (json.instantiatesUri) {
      newInstance.instantiatesUri = json.instantiatesUri.map((x, i) => {
        const ext = json._instantiatesUri && json._instantiatesUri[i];
        return PrimitiveUri.parsePrimitive(x, ext);
      });
    }
    if (json.basedOn) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.groupIdentifier) {
      newInstance.groupIdentifier = Identifier.parse(json.groupIdentifier);
    }
    if (json.courseOfTherapyType) {
      newInstance.courseOfTherapyType = CodeableConcept.parse(json.courseOfTherapyType);
    }
    if (json.insurance) {
      newInstance.insurance = json.insurance.map((x) => Reference.parse(x));
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.dosageInstruction) {
      newInstance.dosageInstruction = json.dosageInstruction.map((x) => Dosage.parse(x));
    }
    if (json.dispenseRequest) {
      newInstance.dispenseRequest = MedicationRequestDispenseRequest.parse(json.dispenseRequest);
    }
    if (json.substitution) {
      newInstance.substitution = MedicationRequestSubstitution.parse(json.substitution);
    }
    if (json.priorPrescription) {
      newInstance.priorPrescription = Reference.parse(json.priorPrescription);
    }
    if (json.detectedIssue) {
      newInstance.detectedIssue = json.detectedIssue.map((x) => Reference.parse(x));
    }
    if (json.eventHistory) {
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
  
  public getTypeName(): string {
    return "MedicationRequest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
