/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  Coding,
  DomainResource,
  Extension,
  IMessageHeader,
  MessageHeaderDestination,
  MessageHeaderResponse,
  MessageHeaderSource,
  PrimitiveCanonical,
  PrimitiveUri,
  Reference,
  FieldMetadata
} from "../internal";

export class MessageHeader extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MessageHeader";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "event",
      fieldType: [Coding, PrimitiveUri],
      isArray: false
    }, {
      fieldName: "destination",
      fieldType: [MessageHeaderDestination],
      isArray: true
    }, {
      fieldName: "sender",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "enterer",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "author",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "source",
      fieldType: [MessageHeaderSource],
      isArray: false
    }, {
      fieldName: "responsible",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "reason",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "response",
      fieldType: [MessageHeaderResponse],
      isArray: false
    }, {
      fieldName: "focus",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "definition",
      fieldType: [PrimitiveCanonical],
      isArray: false
    }];
  }

  public event?: Coding | PrimitiveUri;

  public destination?: Array<MessageHeaderDestination>;

  public sender?: Reference;

  public enterer?: Reference;

  public author?: Reference;

  public source?: MessageHeaderSource;

  public responsible?: Reference;

  public reason?: CodeableConcept;

  public response?: MessageHeaderResponse;

  public focus?: Array<Reference>;

  public definition?: PrimitiveCanonical;

  public static parse(
    json: IMessageHeader,
    providedInstance: MessageHeader = new MessageHeader()
  ): MessageHeader {
    const newInstance: MessageHeader = DomainResource.parse(json, providedInstance);
  
    if (json.eventCoding !== undefined) {
      newInstance.event = Coding.parse(json.eventCoding);
    }
    if (json.eventUri !== undefined) {
      newInstance.event = PrimitiveUri.parsePrimitive(json.eventUri, json._eventUri);
    }
    if (json.destination !== undefined) {
      newInstance.destination = json.destination.map((x) => MessageHeaderDestination.parse(x));
    }
    if (json.sender !== undefined) {
      newInstance.sender = Reference.parse(json.sender);
    }
    if (json.enterer !== undefined) {
      newInstance.enterer = Reference.parse(json.enterer);
    }
    if (json.author !== undefined) {
      newInstance.author = Reference.parse(json.author);
    }
    if (json.source !== undefined) {
      newInstance.source = MessageHeaderSource.parse(json.source);
    }
    if (json.responsible !== undefined) {
      newInstance.responsible = Reference.parse(json.responsible);
    }
    if (json.reason !== undefined) {
      newInstance.reason = CodeableConcept.parse(json.reason);
    }
    if (json.response !== undefined) {
      newInstance.response = MessageHeaderResponse.parse(json.response);
    }
    if (json.focus !== undefined) {
      newInstance.focus = json.focus.map((x) => Reference.parse(x));
    }
    if (json.definition !== undefined) {
      newInstance.definition = PrimitiveCanonical.parsePrimitive(json.definition, json._definition);
    }
    return newInstance;
  }

  public static isMessageHeader(input?: unknown): input is MessageHeader {
    const castInput = input as MessageHeader;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MessageHeader";
  }

  public toJSON(): IMessageHeader {
    const result: IMessageHeader = super.toJSON();

    if (this.event && Coding.isCoding(this.event)) {
      result.eventCoding = this.event.toJSON();
    }

    if (this.event && PrimitiveUri.isPrimitiveUri(this.event)) {
      result.eventUri = this.event.value;
      result._eventUri = Extension.serializePrimitiveExtension(this.event);
    }

    if (this.destination) {
      result.destination = this.destination.map((x) => x.toJSON());
    }

    if (this.sender) {
      result.sender = this.sender.toJSON();
    }

    if (this.enterer) {
      result.enterer = this.enterer.toJSON();
    }

    if (this.author) {
      result.author = this.author.toJSON();
    }

    if (this.source) {
      result.source = this.source.toJSON();
    }

    if (this.responsible) {
      result.responsible = this.responsible.toJSON();
    }

    if (this.reason) {
      result.reason = this.reason.toJSON();
    }

    if (this.response) {
      result.response = this.response.toJSON();
    }

    if (this.focus) {
      result.focus = this.focus.map((x) => x.toJSON());
    }

    if (this.definition) {
      result.definition = this.definition.value;
      result._definition = Extension.serializePrimitiveExtension(this.definition);
    }

    return result;
  }

  public clone(): MessageHeader {
    return MessageHeader.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MessageHeader";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
