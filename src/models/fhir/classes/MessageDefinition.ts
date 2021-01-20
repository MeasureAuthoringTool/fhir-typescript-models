/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  Coding,
  ContactDetail,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  Identifier,
  IMessageDefinition,
  MessageDefinitionAllowedResponse,
  MessageDefinitionFocus,
  MessageheaderResponseRequest,
  MessageSignificanceCategory,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  UsageContext,
  FhirType
} from "../internal";

@FhirType("MessageDefinition", "DomainResource")
export class MessageDefinition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MessageDefinition";

  static readonly primaryCodePath: string | null = "event";

  @FhirField("PrimitiveUri")
  public url?: PrimitiveUri;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("PrimitiveString")
  public version?: PrimitiveString;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveString")
  public title?: PrimitiveString;

  @FhirList("PrimitiveCanonical")
  public replaces?: Array<PrimitiveCanonical>;

  @FhirField("PublicationStatus")
  public status?: PublicationStatus;

  @FhirField("PrimitiveBoolean")
  public experimental?: PrimitiveBoolean;

  @FhirField("PrimitiveDateTime")
  public date?: PrimitiveDateTime;

  @FhirField("PrimitiveString")
  public publisher?: PrimitiveString;

  @FhirList("ContactDetail")
  public contact?: Array<ContactDetail>;

  @FhirField("PrimitiveMarkdown")
  public description?: PrimitiveMarkdown;

  @FhirList("UsageContext")
  public useContext?: Array<UsageContext>;

  @FhirList("CodeableConcept")
  public jurisdiction?: Array<CodeableConcept>;

  @FhirField("PrimitiveMarkdown")
  public purpose?: PrimitiveMarkdown;

  @FhirField("PrimitiveMarkdown")
  public copyright?: PrimitiveMarkdown;

  @FhirField("PrimitiveCanonical")
  public base?: PrimitiveCanonical;

  @FhirList("PrimitiveCanonical")
  public parent?: Array<PrimitiveCanonical>;

  @FhirChoice("Coding", "PrimitiveUri")
  public event?: Coding | PrimitiveUri;

  @FhirField("MessageSignificanceCategory")
  public category?: MessageSignificanceCategory;

  @FhirList("MessageDefinitionFocus")
  public focus?: Array<MessageDefinitionFocus>;

  @FhirField("MessageheaderResponseRequest")
  public responseRequired?: MessageheaderResponseRequest;

  @FhirList("MessageDefinitionAllowedResponse")
  public allowedResponse?: Array<MessageDefinitionAllowedResponse>;

  @FhirList("PrimitiveCanonical")
  public graph?: Array<PrimitiveCanonical>;

  get primaryCode(): Coding | PrimitiveUri | undefined {
    return this?.event;
  }

  set primaryCode(primaryCode: Coding | PrimitiveUri | undefined) {
    this.event = primaryCode;
  }

  public static parse(
    json: IMessageDefinition,
    providedInstance: MessageDefinition = new MessageDefinition()
  ): MessageDefinition {
    const newInstance: MessageDefinition = DomainResource.parse(json, providedInstance);
  
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.version !== undefined) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.title !== undefined) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.replaces !== undefined) {
      newInstance.replaces = json.replaces.map((x, i) => PrimitiveCanonical.parsePrimitive(x, json._replaces?.[i]));
    }
    if (json.status !== undefined) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.experimental !== undefined) {
      newInstance.experimental = PrimitiveBoolean.parsePrimitive(json.experimental, json._experimental);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.publisher !== undefined) {
      newInstance.publisher = PrimitiveString.parsePrimitive(json.publisher, json._publisher);
    }
    if (json.contact !== undefined) {
      newInstance.contact = json.contact.map((x) => ContactDetail.parse(x));
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveMarkdown.parsePrimitive(json.description, json._description);
    }
    if (json.useContext !== undefined) {
      newInstance.useContext = json.useContext.map((x) => UsageContext.parse(x));
    }
    if (json.jurisdiction !== undefined) {
      newInstance.jurisdiction = json.jurisdiction.map((x) => CodeableConcept.parse(x));
    }
    if (json.purpose !== undefined) {
      newInstance.purpose = PrimitiveMarkdown.parsePrimitive(json.purpose, json._purpose);
    }
    if (json.copyright !== undefined) {
      newInstance.copyright = PrimitiveMarkdown.parsePrimitive(json.copyright, json._copyright);
    }
    if (json.base !== undefined) {
      newInstance.base = PrimitiveCanonical.parsePrimitive(json.base, json._base);
    }
    if (json.parent !== undefined) {
      newInstance.parent = json.parent.map((x, i) => PrimitiveCanonical.parsePrimitive(x, json._parent?.[i]));
    }
    if (json.eventCoding !== undefined) {
      newInstance.event = Coding.parse(json.eventCoding);
    }
    if (json.eventUri !== undefined) {
      newInstance.event = PrimitiveUri.parsePrimitive(json.eventUri, json._eventUri);
    }
    if (json.category !== undefined) {
      newInstance.category = MessageSignificanceCategory.parsePrimitive(json.category, json._category);
    }
    if (json.focus !== undefined) {
      newInstance.focus = json.focus.map((x) => MessageDefinitionFocus.parse(x));
    }
    if (json.responseRequired !== undefined) {
      newInstance.responseRequired = MessageheaderResponseRequest.parsePrimitive(json.responseRequired, json._responseRequired);
    }
    if (json.allowedResponse !== undefined) {
      newInstance.allowedResponse = json.allowedResponse.map((x) => MessageDefinitionAllowedResponse.parse(x));
    }
    if (json.graph !== undefined) {
      newInstance.graph = json.graph.map((x, i) => PrimitiveCanonical.parsePrimitive(x, json._graph?.[i]));
    }
    return newInstance;
  }

  public static isMessageDefinition(input?: unknown): input is MessageDefinition {
    const castInput = input as MessageDefinition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MessageDefinition";
  }

  public toJSON(): IMessageDefinition {
    const result: IMessageDefinition = super.toJSON();

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.version) {
      result.version = this.version.value;
      result._version = Extension.serializePrimitiveExtension(this.version);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    if (this.replaces) {
      result.replaces = this.replaces.filter(x => !!x).map(x => x.value) as typeof result.replaces;
      result._replaces = Extension.serializePrimitiveExtensionArray(this.replaces);
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.experimental) {
      result.experimental = this.experimental.value;
      result._experimental = Extension.serializePrimitiveExtension(this.experimental);
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.publisher) {
      result.publisher = this.publisher.value;
      result._publisher = Extension.serializePrimitiveExtension(this.publisher);
    }

    if (this.contact) {
      result.contact = this.contact.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.useContext) {
      result.useContext = this.useContext.map((x) => x.toJSON());
    }

    if (this.jurisdiction) {
      result.jurisdiction = this.jurisdiction.map((x) => x.toJSON());
    }

    if (this.purpose) {
      result.purpose = this.purpose.value;
      result._purpose = Extension.serializePrimitiveExtension(this.purpose);
    }

    if (this.copyright) {
      result.copyright = this.copyright.value;
      result._copyright = Extension.serializePrimitiveExtension(this.copyright);
    }

    if (this.base) {
      result.base = this.base.value;
      result._base = Extension.serializePrimitiveExtension(this.base);
    }

    if (this.parent) {
      result.parent = this.parent.filter(x => !!x).map(x => x.value) as typeof result.parent;
      result._parent = Extension.serializePrimitiveExtensionArray(this.parent);
    }

    if (this.event && Coding.isCoding(this.event)) {
      result.eventCoding = this.event.toJSON();
    }

    if (this.event && PrimitiveUri.isPrimitiveUri(this.event)) {
      result.eventUri = this.event.value;
      result._eventUri = Extension.serializePrimitiveExtension(this.event);
    }

    if (this.category) {
      result.category = this.category.value;
      result._category = Extension.serializePrimitiveExtension(this.category);
    }

    if (this.focus) {
      result.focus = this.focus.map((x) => x.toJSON());
    }

    if (this.responseRequired) {
      result.responseRequired = this.responseRequired.value;
      result._responseRequired = Extension.serializePrimitiveExtension(this.responseRequired);
    }

    if (this.allowedResponse) {
      result.allowedResponse = this.allowedResponse.map((x) => x.toJSON());
    }

    if (this.graph) {
      result.graph = this.graph.filter(x => !!x).map(x => x.value) as typeof result.graph;
      result._graph = Extension.serializePrimitiveExtensionArray(this.graph);
    }

    return result;
  }

  public clone(): MessageDefinition {
    return MessageDefinition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MessageDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
