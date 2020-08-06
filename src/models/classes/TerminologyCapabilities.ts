/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CapabilityStatementKind,
  CodeableConcept,
  CodeSearchSupport,
  ContactDetail,
  DomainResource,
  Extension,
  ITerminologyCapabilities,
  PrimitiveBoolean,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  TerminologyCapabilitiesClosure,
  TerminologyCapabilitiesCodeSystem,
  TerminologyCapabilitiesExpansion,
  TerminologyCapabilitiesImplementation,
  TerminologyCapabilitiesSoftware,
  TerminologyCapabilitiesTranslation,
  TerminologyCapabilitiesValidateCode,
  UsageContext,
} from "../internal";

export class TerminologyCapabilities extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TerminologyCapabilities";

  public url?: PrimitiveUri;

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

  public kind?: CapabilityStatementKind;

  public software?: TerminologyCapabilitiesSoftware;

  public implementation?: TerminologyCapabilitiesImplementation;

  public lockedDate?: PrimitiveBoolean;

  public codeSystem?: Array<TerminologyCapabilitiesCodeSystem>;

  public expansion?: TerminologyCapabilitiesExpansion;

  public codeSearch?: CodeSearchSupport;

  public validateCode?: TerminologyCapabilitiesValidateCode;

  public translation?: TerminologyCapabilitiesTranslation;

  public closure?: TerminologyCapabilitiesClosure;

  public static parse(
    json: ITerminologyCapabilities,
    providedInstance: TerminologyCapabilities = new TerminologyCapabilities()
  ): TerminologyCapabilities {
    const newInstance: TerminologyCapabilities = DomainResource.parse(json, providedInstance);
  
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
    if (json.copyright) {
      newInstance.copyright = PrimitiveMarkdown.parsePrimitive(json.copyright, json._copyright);
    }
    if (json.kind) {
      newInstance.kind = CapabilityStatementKind.parsePrimitive(json.kind, json._kind);
    }
    if (json.software) {
      newInstance.software = TerminologyCapabilitiesSoftware.parse(json.software);
    }
    if (json.implementation) {
      newInstance.implementation = TerminologyCapabilitiesImplementation.parse(json.implementation);
    }
    if (json.lockedDate) {
      newInstance.lockedDate = PrimitiveBoolean.parsePrimitive(json.lockedDate, json._lockedDate);
    }
    if (json.codeSystem) {
      newInstance.codeSystem = json.codeSystem.map((x) => TerminologyCapabilitiesCodeSystem.parse(x));
    }
    if (json.expansion) {
      newInstance.expansion = TerminologyCapabilitiesExpansion.parse(json.expansion);
    }
    if (json.codeSearch) {
      newInstance.codeSearch = CodeSearchSupport.parsePrimitive(json.codeSearch, json._codeSearch);
    }
    if (json.validateCode) {
      newInstance.validateCode = TerminologyCapabilitiesValidateCode.parse(json.validateCode);
    }
    if (json.translation) {
      newInstance.translation = TerminologyCapabilitiesTranslation.parse(json.translation);
    }
    if (json.closure) {
      newInstance.closure = TerminologyCapabilitiesClosure.parse(json.closure);
    }
    return newInstance;
  }

  public static isTerminologyCapabilities(input?: unknown): input is TerminologyCapabilities {
    const castInput = input as TerminologyCapabilities;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TerminologyCapabilities";
  }

  public toJSON(): ITerminologyCapabilities {
    const result: ITerminologyCapabilities = super.toJSON();

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

    if (this.kind) {
      result.kind = this.kind.value;
      result._kind = Extension.serializePrimitiveExtension(this.kind);
    }

    if (this.software) {
      result.software = this.software.toJSON();
    }

    if (this.implementation) {
      result.implementation = this.implementation.toJSON();
    }

    if (this.lockedDate) {
      result.lockedDate = this.lockedDate.value;
      result._lockedDate = Extension.serializePrimitiveExtension(this.lockedDate);
    }

    if (this.codeSystem) {
      result.codeSystem = this.codeSystem.map((x) => x.toJSON());
    }

    if (this.expansion) {
      result.expansion = this.expansion.toJSON();
    }

    if (this.codeSearch) {
      result.codeSearch = this.codeSearch.value;
      result._codeSearch = Extension.serializePrimitiveExtension(this.codeSearch);
    }

    if (this.validateCode) {
      result.validateCode = this.validateCode.toJSON();
    }

    if (this.translation) {
      result.translation = this.translation.toJSON();
    }

    if (this.closure) {
      result.closure = this.closure.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "TerminologyCapabilities";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
