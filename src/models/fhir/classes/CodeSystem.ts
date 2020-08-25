/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  CodeSystemConcept,
  CodeSystemContentMode,
  CodeSystemFilter,
  CodeSystemHierarchyMeaning,
  CodeSystemProperty,
  ContactDetail,
  DomainResource,
  Extension,
  ICodeSystem,
  Identifier,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUnsignedInt,
  PrimitiveUri,
  PublicationStatus,
  UsageContext,
} from "../internal";

export class CodeSystem extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CodeSystem";

  public url?: PrimitiveUri;

  public identifier?: Array<Identifier>;

  public version?: PrimitiveString;

  public name?: PrimitiveString;

  public title?: PrimitiveString;

  public status?: PublicationStatus;

  public experimental?: PrimitiveBoolean;

  public date?: PrimitiveDateTime;

  public publisher?: PrimitiveString;

  public contact?: Array<ContactDetail>;

  public description?: PrimitiveMarkdown;

  public useContext?: Array<UsageContext>;

  public jurisdiction?: Array<CodeableConcept>;

  public purpose?: PrimitiveMarkdown;

  public copyright?: PrimitiveMarkdown;

  public caseSensitive?: PrimitiveBoolean;

  public valueSet?: PrimitiveCanonical;

  public hierarchyMeaning?: CodeSystemHierarchyMeaning;

  public compositional?: PrimitiveBoolean;

  public versionNeeded?: PrimitiveBoolean;

  public content?: CodeSystemContentMode;

  public supplements?: PrimitiveCanonical;

  public count?: PrimitiveUnsignedInt;

  public filter?: Array<CodeSystemFilter>;

  public property?: Array<CodeSystemProperty>;

  public concept?: Array<CodeSystemConcept>;

  public static parse(
    json: ICodeSystem,
    providedInstance: CodeSystem = new CodeSystem()
  ): CodeSystem {
    const newInstance: CodeSystem = DomainResource.parse(json, providedInstance);
  
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
    if (json.caseSensitive !== undefined) {
      newInstance.caseSensitive = PrimitiveBoolean.parsePrimitive(json.caseSensitive, json._caseSensitive);
    }
    if (json.valueSet !== undefined) {
      newInstance.valueSet = PrimitiveCanonical.parsePrimitive(json.valueSet, json._valueSet);
    }
    if (json.hierarchyMeaning !== undefined) {
      newInstance.hierarchyMeaning = CodeSystemHierarchyMeaning.parsePrimitive(json.hierarchyMeaning, json._hierarchyMeaning);
    }
    if (json.compositional !== undefined) {
      newInstance.compositional = PrimitiveBoolean.parsePrimitive(json.compositional, json._compositional);
    }
    if (json.versionNeeded !== undefined) {
      newInstance.versionNeeded = PrimitiveBoolean.parsePrimitive(json.versionNeeded, json._versionNeeded);
    }
    if (json.content !== undefined) {
      newInstance.content = CodeSystemContentMode.parsePrimitive(json.content, json._content);
    }
    if (json.supplements !== undefined) {
      newInstance.supplements = PrimitiveCanonical.parsePrimitive(json.supplements, json._supplements);
    }
    if (json.count !== undefined) {
      newInstance.count = PrimitiveUnsignedInt.parsePrimitive(json.count, json._count);
    }
    if (json.filter !== undefined) {
      newInstance.filter = json.filter.map((x) => CodeSystemFilter.parse(x));
    }
    if (json.property !== undefined) {
      newInstance.property = json.property.map((x) => CodeSystemProperty.parse(x));
    }
    if (json.concept !== undefined) {
      newInstance.concept = json.concept.map((x) => CodeSystemConcept.parse(x));
    }
    return newInstance;
  }

  public static isCodeSystem(input?: unknown): input is CodeSystem {
    const castInput = input as CodeSystem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CodeSystem";
  }

  public toJSON(): ICodeSystem {
    const result: ICodeSystem = super.toJSON();

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

    if (this.caseSensitive) {
      result.caseSensitive = this.caseSensitive.value;
      result._caseSensitive = Extension.serializePrimitiveExtension(this.caseSensitive);
    }

    if (this.valueSet) {
      result.valueSet = this.valueSet.value;
      result._valueSet = Extension.serializePrimitiveExtension(this.valueSet);
    }

    if (this.hierarchyMeaning) {
      result.hierarchyMeaning = this.hierarchyMeaning.value;
      result._hierarchyMeaning = Extension.serializePrimitiveExtension(this.hierarchyMeaning);
    }

    if (this.compositional) {
      result.compositional = this.compositional.value;
      result._compositional = Extension.serializePrimitiveExtension(this.compositional);
    }

    if (this.versionNeeded) {
      result.versionNeeded = this.versionNeeded.value;
      result._versionNeeded = Extension.serializePrimitiveExtension(this.versionNeeded);
    }

    if (this.content) {
      result.content = this.content.value;
      result._content = Extension.serializePrimitiveExtension(this.content);
    }

    if (this.supplements) {
      result.supplements = this.supplements.value;
      result._supplements = Extension.serializePrimitiveExtension(this.supplements);
    }

    if (this.count) {
      result.count = this.count.value;
      result._count = Extension.serializePrimitiveExtension(this.count);
    }

    if (this.filter) {
      result.filter = this.filter.map((x) => x.toJSON());
    }

    if (this.property) {
      result.property = this.property.map((x) => x.toJSON());
    }

    if (this.concept) {
      result.concept = this.concept.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): CodeSystem {
    return CodeSystem.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CodeSystem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
