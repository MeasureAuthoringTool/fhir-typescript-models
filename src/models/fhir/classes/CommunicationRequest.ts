/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  CodeableConcept,
  CommunicationPriority,
  CommunicationRequestPayload,
  CommunicationRequestStatus,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  ICommunicationRequest,
  Identifier,
  Period,
  PrimitiveBoolean,
  PrimitiveDateTime,
  Reference,
  FhirType
} from "../internal";

@FhirType("CommunicationRequest", "DomainResource")
export class CommunicationRequest extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CommunicationRequest";

  static readonly primaryCodePath: string | null = "category";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirList("Reference")
  public basedOn?: Array<Reference>;

  @FhirList("Reference")
  public replaces?: Array<Reference>;

  @FhirField("Identifier")
  public groupIdentifier?: Identifier;

  @FhirField("CommunicationRequestStatus")
  public status?: CommunicationRequestStatus;

  @FhirField("CodeableConcept")
  public statusReason?: CodeableConcept;

  @FhirList("CodeableConcept")
  public category?: Array<CodeableConcept>;

  @FhirField("CommunicationPriority")
  public priority?: CommunicationPriority;

  @FhirField("PrimitiveBoolean")
  public doNotPerform?: PrimitiveBoolean;

  @FhirList("CodeableConcept")
  public medium?: Array<CodeableConcept>;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirList("Reference")
  public about?: Array<Reference>;

  @FhirField("Reference")
  public encounter?: Reference;

  @FhirList("CommunicationRequestPayload")
  public payload?: Array<CommunicationRequestPayload>;

  @FhirChoice("PrimitiveDateTime", "Period")
  public occurrence?: PrimitiveDateTime | Period;

  @FhirField("PrimitiveDateTime")
  public authoredOn?: PrimitiveDateTime;

  @FhirField("Reference")
  public requester?: Reference;

  @FhirList("Reference")
  public recipient?: Array<Reference>;

  @FhirField("Reference")
  public sender?: Reference;

  @FhirList("CodeableConcept")
  public reasonCode?: Array<CodeableConcept>;

  @FhirList("Reference")
  public reasonReference?: Array<Reference>;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.category?.[0];
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.category = primaryCode ? [primaryCode] : [];
  }

  public static parse(
    json: ICommunicationRequest,
    providedInstance: CommunicationRequest = new CommunicationRequest()
  ): CommunicationRequest {
    const newInstance: CommunicationRequest = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.basedOn !== undefined) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.replaces !== undefined) {
      newInstance.replaces = json.replaces.map((x) => Reference.parse(x));
    }
    if (json.groupIdentifier !== undefined) {
      newInstance.groupIdentifier = Identifier.parse(json.groupIdentifier);
    }
    if (json.status !== undefined) {
      newInstance.status = CommunicationRequestStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReason !== undefined) {
      newInstance.statusReason = CodeableConcept.parse(json.statusReason);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.priority !== undefined) {
      newInstance.priority = CommunicationPriority.parsePrimitive(json.priority, json._priority);
    }
    if (json.doNotPerform !== undefined) {
      newInstance.doNotPerform = PrimitiveBoolean.parsePrimitive(json.doNotPerform, json._doNotPerform);
    }
    if (json.medium !== undefined) {
      newInstance.medium = json.medium.map((x) => CodeableConcept.parse(x));
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.about !== undefined) {
      newInstance.about = json.about.map((x) => Reference.parse(x));
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.payload !== undefined) {
      newInstance.payload = json.payload.map((x) => CommunicationRequestPayload.parse(x));
    }
    if (json.occurrenceDateTime !== undefined) {
      newInstance.occurrence = PrimitiveDateTime.parsePrimitive(json.occurrenceDateTime, json._occurrenceDateTime);
    }
    if (json.occurrencePeriod !== undefined) {
      newInstance.occurrence = Period.parse(json.occurrencePeriod);
    }
    if (json.authoredOn !== undefined) {
      newInstance.authoredOn = PrimitiveDateTime.parsePrimitive(json.authoredOn, json._authoredOn);
    }
    if (json.requester !== undefined) {
      newInstance.requester = Reference.parse(json.requester);
    }
    if (json.recipient !== undefined) {
      newInstance.recipient = json.recipient.map((x) => Reference.parse(x));
    }
    if (json.sender !== undefined) {
      newInstance.sender = Reference.parse(json.sender);
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.note !== undefined) {
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

  public clone(): CommunicationRequest {
    return CommunicationRequest.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CommunicationRequest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
