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
  IServiceRequest,
  Period,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUri,
  Quantity,
  Range,
  Ratio,
  Reference,
  ServiceRequestIntent,
  ServiceRequestPriority,
  ServiceRequestStatus,
  Timing,
  FhirType
} from "../internal";

@FhirType("ServiceRequest", "DomainResource")
export class ServiceRequest extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ServiceRequest";

  static readonly primaryCodePath: string | null = "code";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirList("PrimitiveCanonical")
  public instantiatesCanonical?: Array<PrimitiveCanonical>;

  @FhirList("PrimitiveUri")
  public instantiatesUri?: Array<PrimitiveUri>;

  @FhirList("Reference")
  public basedOn?: Array<Reference>;

  @FhirList("Reference")
  public replaces?: Array<Reference>;

  @FhirField("Identifier")
  public requisition?: Identifier;

  @FhirField("ServiceRequestStatus")
  public status?: ServiceRequestStatus;

  @FhirField("ServiceRequestIntent")
  public intent?: ServiceRequestIntent;

  @FhirList("CodeableConcept")
  public category?: Array<CodeableConcept>;

  @FhirField("ServiceRequestPriority")
  public priority?: ServiceRequestPriority;

  @FhirField("PrimitiveBoolean")
  public doNotPerform?: PrimitiveBoolean;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirList("CodeableConcept")
  public orderDetail?: Array<CodeableConcept>;

  @FhirChoice("Quantity", "Ratio", "Range")
  public quantity?: Quantity | Ratio | Range;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("Reference")
  public encounter?: Reference;

  @FhirChoice("PrimitiveDateTime", "Period", "Timing")
  public occurrence?: PrimitiveDateTime | Period | Timing;

  @FhirChoice("PrimitiveBoolean", "CodeableConcept")
  public asNeeded?: PrimitiveBoolean | CodeableConcept;

  @FhirField("PrimitiveDateTime")
  public authoredOn?: PrimitiveDateTime;

  @FhirField("Reference")
  public requester?: Reference;

  @FhirField("CodeableConcept")
  public performerType?: CodeableConcept;

  @FhirList("Reference")
  public performer?: Array<Reference>;

  @FhirList("CodeableConcept")
  public locationCode?: Array<CodeableConcept>;

  @FhirList("Reference")
  public locationReference?: Array<Reference>;

  @FhirList("CodeableConcept")
  public reasonCode?: Array<CodeableConcept>;

  @FhirList("Reference")
  public reasonReference?: Array<Reference>;

  @FhirList("Reference")
  public insurance?: Array<Reference>;

  @FhirList("Reference")
  public supportingInfo?: Array<Reference>;

  @FhirList("Reference")
  public specimen?: Array<Reference>;

  @FhirList("CodeableConcept")
  public bodySite?: Array<CodeableConcept>;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  @FhirField("PrimitiveString")
  public patientInstruction?: PrimitiveString;

  @FhirList("Reference")
  public relevantHistory?: Array<Reference>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IServiceRequest,
    providedInstance: ServiceRequest = new ServiceRequest()
  ): ServiceRequest {
    const newInstance: ServiceRequest = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
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
    if (json.replaces !== undefined) {
      newInstance.replaces = json.replaces.map((x) => Reference.parse(x));
    }
    if (json.requisition !== undefined) {
      newInstance.requisition = Identifier.parse(json.requisition);
    }
    if (json.status !== undefined) {
      newInstance.status = ServiceRequestStatus.parsePrimitive(json.status, json._status);
    }
    if (json.intent !== undefined) {
      newInstance.intent = ServiceRequestIntent.parsePrimitive(json.intent, json._intent);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.priority !== undefined) {
      newInstance.priority = ServiceRequestPriority.parsePrimitive(json.priority, json._priority);
    }
    if (json.doNotPerform !== undefined) {
      newInstance.doNotPerform = PrimitiveBoolean.parsePrimitive(json.doNotPerform, json._doNotPerform);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.orderDetail !== undefined) {
      newInstance.orderDetail = json.orderDetail.map((x) => CodeableConcept.parse(x));
    }
    if (json.quantityQuantity !== undefined) {
      newInstance.quantity = Quantity.parse(json.quantityQuantity);
    }
    if (json.quantityRatio !== undefined) {
      newInstance.quantity = Ratio.parse(json.quantityRatio);
    }
    if (json.quantityRange !== undefined) {
      newInstance.quantity = Range.parse(json.quantityRange);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.occurrenceDateTime !== undefined) {
      newInstance.occurrence = PrimitiveDateTime.parsePrimitive(json.occurrenceDateTime, json._occurrenceDateTime);
    }
    if (json.occurrencePeriod !== undefined) {
      newInstance.occurrence = Period.parse(json.occurrencePeriod);
    }
    if (json.occurrenceTiming !== undefined) {
      newInstance.occurrence = Timing.parse(json.occurrenceTiming);
    }
    if (json.asNeededBoolean !== undefined) {
      newInstance.asNeeded = PrimitiveBoolean.parsePrimitive(json.asNeededBoolean, json._asNeededBoolean);
    }
    if (json.asNeededCodeableConcept !== undefined) {
      newInstance.asNeeded = CodeableConcept.parse(json.asNeededCodeableConcept);
    }
    if (json.authoredOn !== undefined) {
      newInstance.authoredOn = PrimitiveDateTime.parsePrimitive(json.authoredOn, json._authoredOn);
    }
    if (json.requester !== undefined) {
      newInstance.requester = Reference.parse(json.requester);
    }
    if (json.performerType !== undefined) {
      newInstance.performerType = CodeableConcept.parse(json.performerType);
    }
    if (json.performer !== undefined) {
      newInstance.performer = json.performer.map((x) => Reference.parse(x));
    }
    if (json.locationCode !== undefined) {
      newInstance.locationCode = json.locationCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.locationReference !== undefined) {
      newInstance.locationReference = json.locationReference.map((x) => Reference.parse(x));
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.insurance !== undefined) {
      newInstance.insurance = json.insurance.map((x) => Reference.parse(x));
    }
    if (json.supportingInfo !== undefined) {
      newInstance.supportingInfo = json.supportingInfo.map((x) => Reference.parse(x));
    }
    if (json.specimen !== undefined) {
      newInstance.specimen = json.specimen.map((x) => Reference.parse(x));
    }
    if (json.bodySite !== undefined) {
      newInstance.bodySite = json.bodySite.map((x) => CodeableConcept.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.patientInstruction !== undefined) {
      newInstance.patientInstruction = PrimitiveString.parsePrimitive(json.patientInstruction, json._patientInstruction);
    }
    if (json.relevantHistory !== undefined) {
      newInstance.relevantHistory = json.relevantHistory.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isServiceRequest(input?: unknown): input is ServiceRequest {
    const castInput = input as ServiceRequest;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ServiceRequest";
  }

  public toJSON(): IServiceRequest {
    const result: IServiceRequest = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
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

    if (this.replaces) {
      result.replaces = this.replaces.map((x) => x.toJSON());
    }

    if (this.requisition) {
      result.requisition = this.requisition.toJSON();
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
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

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.orderDetail) {
      result.orderDetail = this.orderDetail.map((x) => x.toJSON());
    }

    if (this.quantity && Quantity.isQuantity(this.quantity)) {
      result.quantityQuantity = this.quantity.toJSON();
    }

    if (this.quantity && Ratio.isRatio(this.quantity)) {
      result.quantityRatio = this.quantity.toJSON();
    }

    if (this.quantity && Range.isRange(this.quantity)) {
      result.quantityRange = this.quantity.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.occurrence && PrimitiveDateTime.isPrimitiveDateTime(this.occurrence)) {
      result.occurrenceDateTime = this.occurrence.value;
      result._occurrenceDateTime = Extension.serializePrimitiveExtension(this.occurrence);
    }

    if (this.occurrence && Period.isPeriod(this.occurrence)) {
      result.occurrencePeriod = this.occurrence.toJSON();
    }

    if (this.occurrence && Timing.isTiming(this.occurrence)) {
      result.occurrenceTiming = this.occurrence.toJSON();
    }

    if (this.asNeeded && PrimitiveBoolean.isPrimitiveBoolean(this.asNeeded)) {
      result.asNeededBoolean = this.asNeeded.value;
      result._asNeededBoolean = Extension.serializePrimitiveExtension(this.asNeeded);
    }

    if (this.asNeeded && CodeableConcept.isCodeableConcept(this.asNeeded)) {
      result.asNeededCodeableConcept = this.asNeeded.toJSON();
    }

    if (this.authoredOn) {
      result.authoredOn = this.authoredOn.value;
      result._authoredOn = Extension.serializePrimitiveExtension(this.authoredOn);
    }

    if (this.requester) {
      result.requester = this.requester.toJSON();
    }

    if (this.performerType) {
      result.performerType = this.performerType.toJSON();
    }

    if (this.performer) {
      result.performer = this.performer.map((x) => x.toJSON());
    }

    if (this.locationCode) {
      result.locationCode = this.locationCode.map((x) => x.toJSON());
    }

    if (this.locationReference) {
      result.locationReference = this.locationReference.map((x) => x.toJSON());
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.insurance) {
      result.insurance = this.insurance.map((x) => x.toJSON());
    }

    if (this.supportingInfo) {
      result.supportingInfo = this.supportingInfo.map((x) => x.toJSON());
    }

    if (this.specimen) {
      result.specimen = this.specimen.map((x) => x.toJSON());
    }

    if (this.bodySite) {
      result.bodySite = this.bodySite.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.patientInstruction) {
      result.patientInstruction = this.patientInstruction.value;
      result._patientInstruction = Extension.serializePrimitiveExtension(this.patientInstruction);
    }

    if (this.relevantHistory) {
      result.relevantHistory = this.relevantHistory.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ServiceRequest {
    return ServiceRequest.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ServiceRequest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
