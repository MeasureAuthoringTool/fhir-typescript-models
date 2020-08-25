/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  DeviceRequestParameter,
  DeviceRequestStatus,
  DomainResource,
  Extension,
  Identifier,
  IDeviceRequest,
  Period,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveUri,
  Reference,
  RequestIntent,
  RequestPriority,
  Timing,
} from "../internal";

export class DeviceRequest extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceRequest";

  public identifier?: Array<Identifier>;

  public instantiatesCanonical?: Array<PrimitiveCanonical>;

  public instantiatesUri?: Array<PrimitiveUri>;

  public basedOn?: Array<Reference>;

  public priorRequest?: Array<Reference>;

  public groupIdentifier?: Identifier;

  public status?: DeviceRequestStatus;

  public intent?: RequestIntent;

  public priority?: RequestPriority;

  public code?: Reference | CodeableConcept;

  public parameter?: Array<DeviceRequestParameter>;

  public subject?: Reference;

  public encounter?: Reference;

  public occurrence?: PrimitiveDateTime | Period | Timing;

  public authoredOn?: PrimitiveDateTime;

  public requester?: Reference;

  public performerType?: CodeableConcept;

  public performer?: Reference;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public insurance?: Array<Reference>;

  public supportingInfo?: Array<Reference>;

  public note?: Array<Annotation>;

  public relevantHistory?: Array<Reference>;

  public static parse(
    json: IDeviceRequest,
    providedInstance: DeviceRequest = new DeviceRequest()
  ): DeviceRequest {
    const newInstance: DeviceRequest = DomainResource.parse(json, providedInstance);
  
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
    if (json.priorRequest) {
      newInstance.priorRequest = json.priorRequest.map((x) => Reference.parse(x));
    }
    if (json.groupIdentifier) {
      newInstance.groupIdentifier = Identifier.parse(json.groupIdentifier);
    }
    if (json.status) {
      newInstance.status = DeviceRequestStatus.parsePrimitive(json.status, json._status);
    }
    if (json.intent) {
      newInstance.intent = RequestIntent.parsePrimitive(json.intent, json._intent);
    }
    if (json.priority) {
      newInstance.priority = RequestPriority.parsePrimitive(json.priority, json._priority);
    }
    if (json.codeReference) {
      newInstance.code = Reference.parse(json.codeReference);
    }
    if (json.codeCodeableConcept) {
      newInstance.code = CodeableConcept.parse(json.codeCodeableConcept);
    }
    if (json.parameter) {
      newInstance.parameter = json.parameter.map((x) => DeviceRequestParameter.parse(x));
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
      newInstance.performer = Reference.parse(json.performer);
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
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.relevantHistory) {
      newInstance.relevantHistory = json.relevantHistory.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isDeviceRequest(input?: unknown): input is DeviceRequest {
    const castInput = input as DeviceRequest;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceRequest";
  }

  public toJSON(): IDeviceRequest {
    const result: IDeviceRequest = super.toJSON();

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

    if (this.priorRequest) {
      result.priorRequest = this.priorRequest.map((x) => x.toJSON());
    }

    if (this.groupIdentifier) {
      result.groupIdentifier = this.groupIdentifier.toJSON();
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.intent) {
      result.intent = this.intent.value;
      result._intent = Extension.serializePrimitiveExtension(this.intent);
    }

    if (this.priority) {
      result.priority = this.priority.value;
      result._priority = Extension.serializePrimitiveExtension(this.priority);
    }

    if (this.code && Reference.isReference(this.code)) {
      result.codeReference = this.code.toJSON();
    }

    if (this.code && CodeableConcept.isCodeableConcept(this.code)) {
      result.codeCodeableConcept = this.code.toJSON();
    }

    if (this.parameter) {
      result.parameter = this.parameter.map((x) => x.toJSON());
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
      result.performer = this.performer.toJSON();
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

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.relevantHistory) {
      result.relevantHistory = this.relevantHistory.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "DeviceRequest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
