/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CompartmentDefinitionResource,
  CompartmentType,
  ContactDetail,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  ICompartmentDefinition,
  PrimitiveBoolean,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  UsageContext,
  FhirType
} from "../internal";

@FhirType("CompartmentDefinition", "DomainResource")
export class CompartmentDefinition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CompartmentDefinition";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveUri")
  public url?: PrimitiveUri;

  @FhirField("PrimitiveString")
  public version?: PrimitiveString;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

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

  @FhirField("PrimitiveMarkdown")
  public purpose?: PrimitiveMarkdown;

  @FhirField("CompartmentType")
  public code?: CompartmentType;

  @FhirField("PrimitiveBoolean")
  public search?: PrimitiveBoolean;

  @FhirList("CompartmentDefinitionResource")
  public resource?: Array<CompartmentDefinitionResource>;

  public static parse(
    json: ICompartmentDefinition,
    providedInstance: CompartmentDefinition = new CompartmentDefinition()
  ): CompartmentDefinition {
    const newInstance: CompartmentDefinition = DomainResource.parse(json, providedInstance);
  
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.version !== undefined) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
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
    if (json.purpose !== undefined) {
      newInstance.purpose = PrimitiveMarkdown.parsePrimitive(json.purpose, json._purpose);
    }
    if (json.code !== undefined) {
      newInstance.code = CompartmentType.parsePrimitive(json.code, json._code);
    }
    if (json.search !== undefined) {
      newInstance.search = PrimitiveBoolean.parsePrimitive(json.search, json._search);
    }
    if (json.resource !== undefined) {
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

  public clone(): CompartmentDefinition {
    return CompartmentDefinition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CompartmentDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
