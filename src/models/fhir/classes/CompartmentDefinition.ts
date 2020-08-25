/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CompartmentDefinitionResource,
  CompartmentType,
  ContactDetail,
  DomainResource,
  Extension,
  ICompartmentDefinition,
  PrimitiveBoolean,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  UsageContext,
} from "../internal";

export class CompartmentDefinition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CompartmentDefinition";

  public url?: PrimitiveUri;

  public version?: PrimitiveString;

  public name?: PrimitiveString;

  public status?: PublicationStatus;

  public experimental?: PrimitiveBoolean;

  public date?: PrimitiveDateTime;

  public publisher?: PrimitiveString;

  public contact?: Array<ContactDetail>;

  public description?: PrimitiveMarkdown;

  public useContext?: Array<UsageContext>;

  public purpose?: PrimitiveMarkdown;

  public code?: CompartmentType;

  public search?: PrimitiveBoolean;

  public resource?: Array<CompartmentDefinitionResource>;

  public static parse(
    json: ICompartmentDefinition,
    providedInstance: CompartmentDefinition = new CompartmentDefinition()
  ): CompartmentDefinition {
    const newInstance: CompartmentDefinition = DomainResource.parse(json, providedInstance);
  
    if (json.url) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.version) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.status) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
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
    if (json.purpose) {
      newInstance.purpose = PrimitiveMarkdown.parsePrimitive(json.purpose, json._purpose);
    }
    if (json.code) {
      newInstance.code = CompartmentType.parsePrimitive(json.code, json._code);
    }
    if (json.search) {
      newInstance.search = PrimitiveBoolean.parsePrimitive(json.search, json._search);
    }
    if (json.resource) {
      newInstance.resource = json.resource.map((x) => CompartmentDefinitionResource.parse(x));
    }
    return newInstance;
  }

  public static isCompartmentDefinition(input?: unknown): input is CompartmentDefinition {
    const castInput = input as CompartmentDefinition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CompartmentDefinition";
  }

  public toJSON(): ICompartmentDefinition {
    const result: ICompartmentDefinition = super.toJSON();

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

    if (this.purpose) {
      result.purpose = this.purpose.value;
      result._purpose = Extension.serializePrimitiveExtension(this.purpose);
    }

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.search) {
      result.search = this.search.value;
      result._search = Extension.serializePrimitiveExtension(this.search);
    }

    if (this.resource) {
      result.resource = this.resource.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "CompartmentDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
