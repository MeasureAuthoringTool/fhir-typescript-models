/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  ContactDetail,
  DomainResource,
  Extension,
  INamingSystem,
  NamingSystemType,
  NamingSystemUniqueId,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PublicationStatus,
  UsageContext,
} from "../internal";

export class NamingSystem extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NamingSystem";

  public name?: PrimitiveString;

  public status?: PublicationStatus;

  public kind?: NamingSystemType;

  public date?: PrimitiveDateTime;

  public publisher?: PrimitiveString;

  public contact?: Array<ContactDetail>;

  public responsible?: PrimitiveString;

  public type?: CodeableConcept;

  public description?: PrimitiveMarkdown;

  public useContext?: Array<UsageContext>;

  public jurisdiction?: Array<CodeableConcept>;

  public usage?: PrimitiveString;

  public uniqueId?: Array<NamingSystemUniqueId>;

  public static parse(
    json: INamingSystem,
    providedInstance: NamingSystem = new NamingSystem()
  ): NamingSystem {
    const newInstance: NamingSystem = DomainResource.parse(json, providedInstance);
  
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.status) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.kind) {
      newInstance.kind = NamingSystemType.parsePrimitive(json.kind, json._kind);
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
    if (json.responsible) {
      newInstance.responsible = PrimitiveString.parsePrimitive(json.responsible, json._responsible);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
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
    if (json.usage) {
      newInstance.usage = PrimitiveString.parsePrimitive(json.usage, json._usage);
    }
    if (json.uniqueId) {
      newInstance.uniqueId = json.uniqueId.map((x) => NamingSystemUniqueId.parse(x));
    }
    return newInstance;
  }

  public static isNamingSystem(input?: unknown): input is NamingSystem {
    const castInput = input as NamingSystem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "NamingSystem";
  }

  public toJSON(): INamingSystem {
    const result: INamingSystem = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.kind) {
      result.kind = this.kind.value;
      result._kind = Extension.serializePrimitiveExtension(this.kind);
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

    if (this.responsible) {
      result.responsible = this.responsible.value;
      result._responsible = Extension.serializePrimitiveExtension(this.responsible);
    }

    if (this.type) {
      result.type = this.type.toJSON();
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

    if (this.usage) {
      result.usage = this.usage.value;
      result._usage = Extension.serializePrimitiveExtension(this.usage);
    }

    if (this.uniqueId) {
      result.uniqueId = this.uniqueId.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "NamingSystem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
