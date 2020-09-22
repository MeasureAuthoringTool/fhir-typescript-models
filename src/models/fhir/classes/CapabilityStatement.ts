/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CapabilityStatementDocument,
  CapabilityStatementImplementation,
  CapabilityStatementKind,
  CapabilityStatementMessaging,
  CapabilityStatementRest,
  CapabilityStatementSoftware,
  CodeableConcept,
  ContactDetail,
  DomainResource,
  Extension,
  FHIRVersion,
  ICapabilityStatement,
  MimeType,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  UsageContext,
} from "../internal";

export class CapabilityStatement extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatement";
  
  static readonly primaryCodePath: string | null = null;

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

  public instantiates?: Array<PrimitiveCanonical>;

  public imports?: Array<PrimitiveCanonical>;

  public software?: CapabilityStatementSoftware;

  public implementation?: CapabilityStatementImplementation;

  public fhirVersion?: FHIRVersion;

  public format?: Array<MimeType>;

  public patchFormat?: Array<MimeType>;

  public implementationGuide?: Array<PrimitiveCanonical>;

  public rest?: Array<CapabilityStatementRest>;

  public messaging?: Array<CapabilityStatementMessaging>;

  public document?: Array<CapabilityStatementDocument>;

  public static parse(
    json: ICapabilityStatement,
    providedInstance: CapabilityStatement = new CapabilityStatement()
  ): CapabilityStatement {
    const newInstance: CapabilityStatement = DomainResource.parse(json, providedInstance);
  
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
    if (json.instantiates !== undefined) {
      newInstance.instantiates = json.instantiates.map((x, i) => {
        const ext = json._instantiates && json._instantiates[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    if (json.imports !== undefined) {
      newInstance.imports = json.imports.map((x, i) => {
        const ext = json._imports && json._imports[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    if (json.software !== undefined) {
      newInstance.software = CapabilityStatementSoftware.parse(json.software);
    }
    if (json.implementation !== undefined) {
      newInstance.implementation = CapabilityStatementImplementation.parse(json.implementation);
    }
    if (json.fhirVersion !== undefined) {
      newInstance.fhirVersion = FHIRVersion.parsePrimitive(json.fhirVersion, json._fhirVersion);
    }
    if (json.format !== undefined) {
      newInstance.format = json.format.map((x, i) => {
        const ext = json._format && json._format[i];
        return MimeType.parsePrimitive(x, ext);
      });
    }
    if (json.patchFormat !== undefined) {
      newInstance.patchFormat = json.patchFormat.map((x, i) => {
        const ext = json._patchFormat && json._patchFormat[i];
        return MimeType.parsePrimitive(x, ext);
      });
    }
    if (json.implementationGuide !== undefined) {
      newInstance.implementationGuide = json.implementationGuide.map((x, i) => {
        const ext = json._implementationGuide && json._implementationGuide[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    if (json.rest !== undefined) {
      newInstance.rest = json.rest.map((x) => CapabilityStatementRest.parse(x));
    }
    if (json.messaging !== undefined) {
      newInstance.messaging = json.messaging.map((x) => CapabilityStatementMessaging.parse(x));
    }
    if (json.document !== undefined) {
      newInstance.document = json.document.map((x) => CapabilityStatementDocument.parse(x));
    }
    return newInstance;
  }

  public static isCapabilityStatement(input?: unknown): input is CapabilityStatement {
    const castInput = input as CapabilityStatement;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CapabilityStatement";
  }

  public toJSON(): ICapabilityStatement {
    const result: ICapabilityStatement = super.toJSON();

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

    if (this.instantiates) {
      result.instantiates = this.instantiates.filter(x => !!x).map(x => x.value) as typeof result.instantiates;
      result._instantiates = Extension.serializePrimitiveExtensionArray(this.instantiates);
    }

    if (this.imports) {
      result.imports = this.imports.filter(x => !!x).map(x => x.value) as typeof result.imports;
      result._imports = Extension.serializePrimitiveExtensionArray(this.imports);
    }

    if (this.software) {
      result.software = this.software.toJSON();
    }

    if (this.implementation) {
      result.implementation = this.implementation.toJSON();
    }

    if (this.fhirVersion) {
      result.fhirVersion = this.fhirVersion.value;
      result._fhirVersion = Extension.serializePrimitiveExtension(this.fhirVersion);
    }

    if (this.format) {
      result.format = this.format.filter(x => !!x).map(x => x.value) as typeof result.format;
      result._format = Extension.serializePrimitiveExtensionArray(this.format);
    }

    if (this.patchFormat) {
      result.patchFormat = this.patchFormat.filter(x => !!x).map(x => x.value) as typeof result.patchFormat;
      result._patchFormat = Extension.serializePrimitiveExtensionArray(this.patchFormat);
    }

    if (this.implementationGuide) {
      result.implementationGuide = this.implementationGuide.filter(x => !!x).map(x => x.value) as typeof result.implementationGuide;
      result._implementationGuide = Extension.serializePrimitiveExtensionArray(this.implementationGuide);
    }

    if (this.rest) {
      result.rest = this.rest.map((x) => x.toJSON());
    }

    if (this.messaging) {
      result.messaging = this.messaging.map((x) => x.toJSON());
    }

    if (this.document) {
      result.document = this.document.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): CapabilityStatement {
    return CapabilityStatement.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CapabilityStatement";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
