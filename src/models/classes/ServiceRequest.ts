/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
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
} from "../internal";

export class ServiceRequest extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ServiceRequest";

  public identifier?: Array<Identifier>;

  public instantiatesCanonical?: Array<PrimitiveCanonical>;

  public instantiatesUri?: Array<PrimitiveUri>;

  public basedOn?: Array<Reference>;

  public replaces?: Array<Reference>;

  public requisition?: Identifier;

  public status?: ServiceRequestStatus;

  public intent?: ServiceRequestIntent;

  public category?: Array<CodeableConcept>;

  public priority?: ServiceRequestPriority;

  public doNotPerform?: PrimitiveBoolean;

  public code?: CodeableConcept;

  public orderDetail?: Array<CodeableConcept>;

  public quantity?: Quantity | Ratio | Range;

  public subject?: Reference;

  public encounter?: Reference;

  public occurrence?: PrimitiveDateTime | Period | Timing;

  public asNeeded?: PrimitiveBoolean | CodeableConcept;

  public authoredOn?: PrimitiveDateTime;

  public requester?: Reference;

  public performerType?: CodeableConcept;

  public performer?: Array<Reference>;

  public locationCode?: Array<CodeableConcept>;

  public locationReference?: Array<Reference>;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public insurance?: Array<Reference>;

  public supportingInfo?: Array<Reference>;

  public specimen?: Array<Reference>;

  public bodySite?: Array<CodeableConcept>;

  public note?: Array<Annotation>;

  public patientInstruction?: PrimitiveString;

  public relevantHistory?: Array<Reference>;

  public static parse(
    json: IServiceRequest,
    providedInstance: ServiceRequest = new ServiceRequest()
  ): ServiceRequest {
    const newInstance: ServiceRequest = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
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
    if (json.replaces) {
      newInstance.replaces = json.replaces.map((x) => Reference.parse(x));
    }
    if (json.requisition) {
      newInstance.requisition = Identifier.parse(json.requisition);
    }
    if (json.status) {
      newInstance.status = ServiceRequestStatus.parsePrimitive(json.status, json._status);
    }
    if (json.intent) {
      newInstance.intent = ServiceRequestIntent.parsePrimitive(json.intent, json._intent);
    }
    if (json.category) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.priority) {
      newInstance.priority = ServiceRequestPriority.parsePrimitive(json.priority, json._priority);
    }
    if (json.doNotPerform) {
      newInstance.doNotPerform = PrimitiveBoolean.parsePrimitive(json.doNotPerform, json._doNotPerform);
    }
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.orderDetail) {
      newInstance.orderDetail = json.orderDetail.map((x) => CodeableConcept.parse(x));
    }
    if (json.quantityQuantity) {
      newInstance.quantity = Quantity.parse(json.quantityQuantity);
    }
    if (json.quantityRatio) {
      newInstance.quantity = Ratio.parse(json.quantityRatio);
    }
    if (json.quantityRange) {
      newInstance.quantity = Range.parse(json.quantityRange);
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.occurrenceDateTime) {
      newInstance.occurrence = PrimitiveDateTime.parsePrimitive(json.occurrenceDateTime, json._occurrenceDateTime);
    }
    if (json.occurrencePeriod) {
      newInstance.occurrence = Period.parse(json.occurrencePeriod);
    }
    if (json.occurrenceTiming) {
      newInstance.occurrence = Timing.parse(json.occurrenceTiming);
    }
    if (json.asNeededBoolean) {
      newInstance.asNeeded = PrimitiveBoolean.parsePrimitive(json.asNeededBoolean, json._asNeededBoolean);
    }
    if (json.asNeededCodeableConcept) {
      newInstance.asNeeded = CodeableConcept.parse(json.asNeededCodeableConcept);
    }
    if (json.authoredOn) {
      newInstance.authoredOn = PrimitiveDateTime.parsePrimitive(json.authoredOn, json._authoredOn);
    }
    if (json.requester) {
      newInstance.requester = Reference.parse(json.requester);
    }
    if (json.performerType) {
      newInstance.performerType = CodeableConcept.parse(json.performerType);
    }
    if (json.performer) {
      newInstance.performer = json.performer.map((x) => Reference.parse(x));
    }
    if (json.locationCode) {
      newInstance.locationCode = json.locationCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.locationReference) {
      newInstance.locationReference = json.locationReference.map((x) => Reference.parse(x));
    }
    if (json.reasonCode) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.insurance) {
      newInstance.insurance = json.insurance.map((x) => Reference.parse(x));
    }
    if (json.supportingInfo) {
      newInstance.supportingInfo = json.supportingInfo.map((x) => Reference.parse(x));
    }
    if (json.specimen) {
      newInstance.specimen = json.specimen.map((x) => Reference.parse(x));
    }
    if (json.bodySite) {
      newInstance.bodySite = json.bodySite.map((x) => CodeableConcept.parse(x));
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.patientInstruction) {
      newInstance.patientInstruction = PrimitiveString.parsePrimitive(json.patientInstruction, json._patientInstruction);
    }
    if (json.relevantHistory) {
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
  
  public getTypeName(): string {
    return "ServiceRequest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
