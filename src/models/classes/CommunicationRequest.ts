/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  CommunicationPriority,
  CommunicationRequestPayload,
  CommunicationRequestStatus,
  DomainResource,
  Extension,
  ICommunicationRequest,
  Identifier,
  Period,
  PrimitiveBoolean,
  PrimitiveDateTime,
  Reference,
} from "../internal";

export class CommunicationRequest extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CommunicationRequest";

  public identifier?: Array<Identifier>;

  public basedOn?: Array<Reference>;

  public replaces?: Array<Reference>;

  public groupIdentifier?: Identifier;

  public status?: CommunicationRequestStatus;

  public statusReason?: CodeableConcept;

  public category?: Array<CodeableConcept>;

  public priority?: CommunicationPriority;

  public doNotPerform?: PrimitiveBoolean;

  public medium?: Array<CodeableConcept>;

  public subject?: Reference;

  public about?: Array<Reference>;

  public encounter?: Reference;

  public payload?: Array<CommunicationRequestPayload>;

  public occurrence?: PrimitiveDateTime | Period;

  public authoredOn?: PrimitiveDateTime;

  public requester?: Reference;

  public recipient?: Array<Reference>;

  public sender?: Reference;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public note?: Array<Annotation>;

  public static parse(
    json: ICommunicationRequest,
    providedInstance: CommunicationRequest = new CommunicationRequest()
  ): CommunicationRequest {
    const newInstance: CommunicationRequest = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.basedOn) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.replaces) {
      newInstance.replaces = json.replaces.map((x) => Reference.parse(x));
    }
    if (json.groupIdentifier) {
      newInstance.groupIdentifier = Identifier.parse(json.groupIdentifier);
    }
    if (json.status) {
      newInstance.status = CommunicationRequestStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReason) {
      newInstance.statusReason = CodeableConcept.parse(json.statusReason);
    }
    if (json.category) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.priority) {
      newInstance.priority = CommunicationPriority.parsePrimitive(json.priority, json._priority);
    }
    if (json.doNotPerform) {
      newInstance.doNotPerform = PrimitiveBoolean.parsePrimitive(json.doNotPerform, json._doNotPerform);
    }
    if (json.medium) {
      newInstance.medium = json.medium.map((x) => CodeableConcept.parse(x));
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.about) {
      newInstance.about = json.about.map((x) => Reference.parse(x));
    }
    if (json.encounter) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.payload) {
      newInstance.payload = json.payload.map((x) => CommunicationRequestPayload.parse(x));
    }
    if (json.occurrenceDateTime) {
      newInstance.occurrence = PrimitiveDateTime.parsePrimitive(json.occurrenceDateTime, json._occurrenceDateTime);
    }
    if (json.occurrencePeriod) {
      newInstance.occurrence = Period.parse(json.occurrencePeriod);
    }
    if (json.authoredOn) {
      newInstance.authoredOn = PrimitiveDateTime.parsePrimitive(json.authoredOn, json._authoredOn);
    }
    if (json.requester) {
      newInstance.requester = Reference.parse(json.requester);
    }
    if (json.recipient) {
      newInstance.recipient = json.recipient.map((x) => Reference.parse(x));
    }
    if (json.sender) {
      newInstance.sender = Reference.parse(json.sender);
    }
    if (json.reasonCode) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isCommunicationRequest(input?: unknown): input is CommunicationRequest {
    const castInput = input as CommunicationRequest;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CommunicationRequest";
  }

  public toJSON(): ICommunicationRequest {
    const result: ICommunicationRequest = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.basedOn) {
      result.basedOn = this.basedOn.map((x) => x.toJSON());
    }

    if (this.replaces) {
      result.replaces = this.replaces.map((x) => x.toJSON());
    }

    if (this.groupIdentifier) {
      result.groupIdentifier = this.groupIdentifier.toJSON();
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.statusReason) {
      result.statusReason = this.statusReason.toJSON();
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

    if (this.medium) {
      result.medium = this.medium.map((x) => x.toJSON());
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.about) {
      result.about = this.about.map((x) => x.toJSON());
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.payload) {
      result.payload = this.payload.map((x) => x.toJSON());
    }

    if (this.occurrence && PrimitiveDateTime.isPrimitiveDateTime(this.occurrence)) {
      result.occurrenceDateTime = this.occurrence.value;
      result._occurrenceDateTime = Extension.serializePrimitiveExtension(this.occurrence);
    }

    if (this.occurrence && Period.isPeriod(this.occurrence)) {
      result.occurrencePeriod = this.occurrence.toJSON();
    }

    if (this.authoredOn) {
      result.authoredOn = this.authoredOn.value;
      result._authoredOn = Extension.serializePrimitiveExtension(this.authoredOn);
    }

    if (this.requester) {
      result.requester = this.requester.toJSON();
    }

    if (this.recipient) {
      result.recipient = this.recipient.map((x) => x.toJSON());
    }

    if (this.sender) {
      result.sender = this.sender.toJSON();
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "CommunicationRequest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
