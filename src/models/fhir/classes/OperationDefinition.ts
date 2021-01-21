/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  ContactDetail,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
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
  FhirType
} from "../internal";

@FhirType("OperationDefinition", "DomainResource")
export class OperationDefinition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "OperationDefinition";

  static readonly primaryCodePath: string | null = "code";

  @FhirField("PrimitiveUri")
  public url?: PrimitiveUri;

  @FhirField("PrimitiveString")
  public version?: PrimitiveString;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveString")
  public title?: PrimitiveString;

  @FhirField("PublicationStatus")
  public status?: PublicationStatus;

  @FhirField("OperationKind")
  public kind?: OperationKind;

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

  @FhirField("PrimitiveBoolean")
  public affectsState?: PrimitiveBoolean;

  @FhirField("PrimitiveCode")
  public code?: PrimitiveCode;

  @FhirField("PrimitiveMarkdown")
  public comment?: PrimitiveMarkdown;

  @FhirField("PrimitiveCanonical")
  public base?: PrimitiveCanonical;

  @FhirList("ResourceType")
  public resource?: Array<ResourceType>;

  @FhirField("PrimitiveBoolean")
  public system?: PrimitiveBoolean;

  @FhirField("PrimitiveBoolean")
  public type?: PrimitiveBoolean;

  @FhirField("PrimitiveBoolean")
  public instance?: PrimitiveBoolean;

  @FhirField("PrimitiveCanonical")
  public inputProfile?: PrimitiveCanonical;

  @FhirField("PrimitiveCanonical")
  public outputProfile?: PrimitiveCanonical;

  @FhirList("OperationDefinitionParameter")
  public parameter?: Array<OperationDefinitionParameter>;

  @FhirList("OperationDefinitionOverload")
  public overload?: Array<OperationDefinitionOverload>;

  get primaryCode(): PrimitiveCode | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: PrimitiveCode | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IOperationDefinition,
    providedInstance: OperationDefinition = new OperationDefinition()
  ): OperationDefinition {
    const newInstance: OperationDefinition = DomainResource.parse(json, providedInstance);
  
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
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
    if (json.status !== undefined) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.kind !== undefined) {
      newInstance.kind = OperationKind.parsePrimitive(json.kind, json._kind);
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
    if (json.affectsState !== undefined) {
      newInstance.affectsState = PrimitiveBoolean.parsePrimitive(json.affectsState, json._affectsState);
    }
    if (json.code !== undefined) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.comment !== undefined) {
      newInstance.comment = PrimitiveMarkdown.parsePrimitive(json.comment, json._comment);
    }
    if (json.base !== undefined) {
      newInstance.base = PrimitiveCanonical.parsePrimitive(json.base, json._base);
    }
    if (json.resource !== undefined) {
      newInstance.resource = json.resource.map((x, i) => ResourceType.parsePrimitive(x, json._resource?.[i]));
    }
    if (json.system !== undefined) {
      newInstance.system = PrimitiveBoolean.parsePrimitive(json.system, json._system);
    }
    if (json.type !== undefined) {
      newInstance.type = PrimitiveBoolean.parsePrimitive(json.type, json._type);
    }
    if (json.instance !== undefined) {
      newInstance.instance = PrimitiveBoolean.parsePrimitive(json.instance, json._instance);
    }
    if (json.inputProfile !== undefined) {
      newInstance.inputProfile = PrimitiveCanonical.parsePrimitive(json.inputProfile, json._inputProfile);
    }
    if (json.outputProfile !== undefined) {
      newInstance.outputProfile = PrimitiveCanonical.parsePrimitive(json.outputProfile, json._outputProfile);
    }
    if (json.parameter !== undefined) {
      newInstance.parameter = json.parameter.map((x) => OperationDefinitionParameter.parse(x));
    }
    if (json.overload !== undefined) {
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

  public clone(): OperationDefinition {
    return OperationDefinition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "OperationDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
