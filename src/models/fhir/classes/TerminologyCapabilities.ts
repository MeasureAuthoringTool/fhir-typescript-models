/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CapabilityStatementKind,
  CodeableConcept,
  CodeSearchSupport,
  ContactDetail,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
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
  FhirType
} from "../internal";

@FhirType("TerminologyCapabilities", "DomainResource")
export class TerminologyCapabilities extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TerminologyCapabilities";

  static readonly primaryCodePath: string | null = null;

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

  @FhirField("CapabilityStatementKind")
  public kind?: CapabilityStatementKind;

  @FhirField("TerminologyCapabilitiesSoftware")
  public software?: TerminologyCapabilitiesSoftware;

  @FhirField("TerminologyCapabilitiesImplementation")
  public implementation?: TerminologyCapabilitiesImplementation;

  @FhirField("PrimitiveBoolean")
  public lockedDate?: PrimitiveBoolean;

  @FhirList("TerminologyCapabilitiesCodeSystem")
  public codeSystem?: Array<TerminologyCapabilitiesCodeSystem>;

  @FhirField("TerminologyCapabilitiesExpansion")
  public expansion?: TerminologyCapabilitiesExpansion;

  @FhirField("CodeSearchSupport")
  public codeSearch?: CodeSearchSupport;

  @FhirField("TerminologyCapabilitiesValidateCode")
  public validateCode?: TerminologyCapabilitiesValidateCode;

  @FhirField("TerminologyCapabilitiesTranslation")
  public translation?: TerminologyCapabilitiesTranslation;

  @FhirField("TerminologyCapabilitiesClosure")
  public closure?: TerminologyCapabilitiesClosure;

  public static parse(
    json: ITerminologyCapabilities,
    providedInstance: TerminologyCapabilities = new TerminologyCapabilities()
  ): TerminologyCapabilities {
    const newInstance: TerminologyCapabilities = DomainResource.parse(json, providedInstance);
  
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
    if (json.kind !== undefined) {
      newInstance.kind = CapabilityStatementKind.parsePrimitive(json.kind, json._kind);
    }
    if (json.software !== undefined) {
      newInstance.software = TerminologyCapabilitiesSoftware.parse(json.software);
    }
    if (json.implementation !== undefined) {
      newInstance.implementation = TerminologyCapabilitiesImplementation.parse(json.implementation);
    }
    if (json.lockedDate !== undefined) {
      newInstance.lockedDate = PrimitiveBoolean.parsePrimitive(json.lockedDate, json._lockedDate);
    }
    if (json.codeSystem !== undefined) {
      newInstance.codeSystem = json.codeSystem.map((x) => TerminologyCapabilitiesCodeSystem.parse(x));
    }
    if (json.expansion !== undefined) {
      newInstance.expansion = TerminologyCapabilitiesExpansion.parse(json.expansion);
    }
    if (json.codeSearch !== undefined) {
      newInstance.codeSearch = CodeSearchSupport.parsePrimitive(json.codeSearch, json._codeSearch);
    }
    if (json.validateCode !== undefined) {
      newInstance.validateCode = TerminologyCapabilitiesValidateCode.parse(json.validateCode);
    }
    if (json.translation !== undefined) {
      newInstance.translation = TerminologyCapabilitiesTranslation.parse(json.translation);
    }
    if (json.closure !== undefined) {
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

  public clone(): TerminologyCapabilities {
    return TerminologyCapabilities.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TerminologyCapabilities";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
