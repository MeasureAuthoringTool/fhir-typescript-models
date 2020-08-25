/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  ContactDetail,
  DomainResource,
  Extension,
  IOperationDefinition,
  OperationDefinitionOverload,
  OperationDefinitionParameter,
  OperationKind,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveCode,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  ResourceType,
  UsageContext,
} from "../internal";

export class OperationDefinition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "OperationDefinition";

  public url?: PrimitiveUri;

  public version?: PrimitiveString;

  public name?: PrimitiveString;

  public title?: PrimitiveString;

  public status?: PublicationStatus;

  public kind?: OperationKind;

  public experimental?: PrimitiveBoolean;

  public date?: PrimitiveDateTime;

  public publisher?: PrimitiveString;

  public contact?: Array<ContactDetail>;

  public description?: PrimitiveMarkdown;

  public useContext?: Array<UsageContext>;

  public jurisdiction?: Array<CodeableConcept>;

  public purpose?: PrimitiveMarkdown;

  public affectsState?: PrimitiveBoolean;

  public code?: PrimitiveCode;

  public comment?: PrimitiveMarkdown;

  public base?: PrimitiveCanonical;

  public resource?: Array<ResourceType>;

  public system?: PrimitiveBoolean;

  public type?: PrimitiveBoolean;

  public instance?: PrimitiveBoolean;

  public inputProfile?: PrimitiveCanonical;

  public outputProfile?: PrimitiveCanonical;

  public parameter?: Array<OperationDefinitionParameter>;

  public overload?: Array<OperationDefinitionOverload>;

  public static parse(
    json: IOperationDefinition,
    providedInstance: OperationDefinition = new OperationDefinition()
  ): OperationDefinition {
    const newInstance: OperationDefinition = DomainResource.parse(json, providedInstance);
  
    if (json.url) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.version) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.title) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.status) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.kind) {
      newInstance.kind = OperationKind.parsePrimitive(json.kind, json._kind);
    }
    if (json.experimental) {
      newInstance.experimental = PrimitiveBoolean.parsePrimitive(json.experimental, json._experimental);
    }
    if (json.date) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.publisher) {
      newInstance.publisher = PrimitiveString.parsePrimitive(json.publisher, json._publisher);
    }
    if (json.contact) {
      newInstance.contact = json.contact.map((x) => ContactDetail.parse(x));
    }
    if (json.description) {
      newInstance.description = PrimitiveMarkdown.parsePrimitive(json.description, json._description);
    }
    if (json.useContext) {
      newInstance.useContext = json.useContext.map((x) => UsageContext.parse(x));
    }
    if (json.jurisdiction) {
      newInstance.jurisdiction = json.jurisdiction.map((x) => CodeableConcept.parse(x));
    }
    if (json.purpose) {
      newInstance.purpose = PrimitiveMarkdown.parsePrimitive(json.purpose, json._purpose);
    }
    if (json.affectsState) {
      newInstance.affectsState = PrimitiveBoolean.parsePrimitive(json.affectsState, json._affectsState);
    }
    if (json.code) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.comment) {
      newInstance.comment = PrimitiveMarkdown.parsePrimitive(json.comment, json._comment);
    }
    if (json.base) {
      newInstance.base = PrimitiveCanonical.parsePrimitive(json.base, json._base);
    }
    if (json.resource) {
      newInstance.resource = json.resource.map((x, i) => {
        const ext = json._resource && json._resource[i];
        return ResourceType.parsePrimitive(x, ext);
      });
    }
    if (json.system) {
      newInstance.system = PrimitiveBoolean.parsePrimitive(json.system, json._system);
    }
    if (json.type) {
      newInstance.type = PrimitiveBoolean.parsePrimitive(json.type, json._type);
    }
    if (json.instance) {
      newInstance.instance = PrimitiveBoolean.parsePrimitive(json.instance, json._instance);
    }
    if (json.inputProfile) {
      newInstance.inputProfile = PrimitiveCanonical.parsePrimitive(json.inputProfile, json._inputProfile);
    }
    if (json.outputProfile) {
      newInstance.outputProfile = PrimitiveCanonical.parsePrimitive(json.outputProfile, json._outputProfile);
    }
    if (json.parameter) {
      newInstance.parameter = json.parameter.map((x) => OperationDefinitionParameter.parse(x));
    }
    if (json.overload) {
      newInstance.overload = json.overload.map((x) => OperationDefinitionOverload.parse(x));
    }
    return newInstance;
  }

  public static isOperationDefinition(input?: unknown): input is OperationDefinition {
    const castInput = input as OperationDefinition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "OperationDefinition";
  }

  public toJSON(): IOperationDefinition {
    const result: IOperationDefinition = super.toJSON();

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
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

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.kind) {
      result.kind = this.kind.value;
      result._kind = Extension.serializePrimitiveExtension(this.kind);
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

    if (this.affectsState) {
      result.affectsState = this.affectsState.value;
      result._affectsState = Extension.serializePrimitiveExtension(this.affectsState);
    }

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    if (this.base) {
      result.base = this.base.value;
      result._base = Extension.serializePrimitiveExtension(this.base);
    }

    if (this.resource) {
      result.resource = this.resource.filter(x => !!x).map(x => x.value) as typeof result.resource;
      result._resource = Extension.serializePrimitiveExtensionArray(this.resource);
    }

    if (this.system) {
      result.system = this.system.value;
      result._system = Extension.serializePrimitiveExtension(this.system);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.instance) {
      result.instance = this.instance.value;
      result._instance = Extension.serializePrimitiveExtension(this.instance);
    }

    if (this.inputProfile) {
      result.inputProfile = this.inputProfile.value;
      result._inputProfile = Extension.serializePrimitiveExtension(this.inputProfile);
    }

    if (this.outputProfile) {
      result.outputProfile = this.outputProfile.value;
      result._outputProfile = Extension.serializePrimitiveExtension(this.outputProfile);
    }

    if (this.parameter) {
      result.parameter = this.parameter.map((x) => x.toJSON());
    }

    if (this.overload) {
      result.overload = this.overload.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "OperationDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
