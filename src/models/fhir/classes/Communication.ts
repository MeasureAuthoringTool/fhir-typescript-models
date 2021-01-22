/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  CodeableConcept,
  CommunicationPayload,
  CommunicationPriority,
  CommunicationStatus,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  ICommunication,
  Identifier,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveUri,
  Reference,
  FhirType
} from "../internal";

@FhirType("Communication", "DomainResource")
export class Communication extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Communication";

  static readonly primaryCodePath: string | null = "category";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirList("PrimitiveCanonical")
  public instantiatesCanonical?: Array<PrimitiveCanonical>;

  @FhirList("PrimitiveUri")
  public instantiatesUri?: Array<PrimitiveUri>;

  @FhirList("Reference")
  public basedOn?: Array<Reference>;

  @FhirList("Reference")
  public partOf?: Array<Reference>;

  @FhirList("Reference")
  public inResponseTo?: Array<Reference>;

  @FhirField("CommunicationStatus")
  public status?: CommunicationStatus;

  @FhirField("CodeableConcept")
  public statusReason?: CodeableConcept;

  @FhirList("CodeableConcept")
  public category?: Array<CodeableConcept>;

  @FhirField("CommunicationPriority")
  public priority?: CommunicationPriority;

  @FhirList("CodeableConcept")
  public medium?: Array<CodeableConcept>;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("CodeableConcept")
  public topic?: CodeableConcept;

  @FhirList("Reference")
  public about?: Array<Reference>;

  @FhirField("Reference")
  public encounter?: Reference;

  @FhirField("PrimitiveDateTime")
  public sent?: PrimitiveDateTime;

  @FhirField("PrimitiveDateTime")
  public received?: PrimitiveDateTime;

  @FhirList("Reference")
  public recipient?: Array<Reference>;

  @FhirField("Reference")
  public sender?: Reference;

  @FhirList("CodeableConcept")
  public reasonCode?: Array<CodeableConcept>;

  @FhirList("Reference")
  public reasonReference?: Array<Reference>;

  @FhirList("CommunicationPayload")
  public payload?: Array<CommunicationPayload>;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.category?.[0];
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.category = primaryCode ? [primaryCode] : [];
  }

  public static parse(
    json: ICommunication,
    providedInstance: Communication = new Communication()
  ): Communication {
    const newInstance: Communication = DomainResource.parse(json, providedInstance);
  
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
    if (json.partOf !== undefined) {
      newInstance.partOf = json.partOf.map((x) => Reference.parse(x));
    }
    if (json.inResponseTo !== undefined) {
      newInstance.inResponseTo = json.inResponseTo.map((x) => Reference.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = CommunicationStatus.parsePrimitive(json.status, json._status);
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
    if (json.medium !== undefined) {
      newInstance.medium = json.medium.map((x) => CodeableConcept.parse(x));
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.topic !== undefined) {
      newInstance.topic = CodeableConcept.parse(json.topic);
    }
    if (json.about !== undefined) {
      newInstance.about = json.about.map((x) => Reference.parse(x));
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.sent !== undefined) {
      newInstance.sent = PrimitiveDateTime.parsePrimitive(json.sent, json._sent);
    }
    if (json.received !== undefined) {
      newInstance.received = PrimitiveDateTime.parsePrimitive(json.received, json._received);
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
    if (json.payload !== undefined) {
      newInstance.payload = json.payload.map((x) => CommunicationPayload.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isCommunication(input?: unknown): input is Communication {
    const castInput = input as Communication;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Communication";
  }

  public toJSON(): ICommunication {
    const result: ICommunication = super.toJSON();

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

    if (this.partOf) {
      result.partOf = this.partOf.map((x) => x.toJSON());
    }

    if (this.inResponseTo) {
      result.inResponseTo = this.inResponseTo.map((x) => x.toJSON());
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

    if (this.medium) {
      result.medium = this.medium.map((x) => x.toJSON());
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.topic) {
      result.topic = this.topic.toJSON();
    }

    if (this.about) {
      result.about = this.about.map((x) => x.toJSON());
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.sent) {
      result.sent = this.sent.value;
      result._sent = Extension.serializePrimitiveExtension(this.sent);
    }

    if (this.received) {
      result.received = this.received.value;
      result._received = Extension.serializePrimitiveExtension(this.received);
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

    if (this.payload) {
      result.payload = this.payload.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Communication {
    return Communication.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Communication";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
