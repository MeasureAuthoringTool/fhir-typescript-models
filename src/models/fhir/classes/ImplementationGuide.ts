/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  ContactDetail,
  DomainResource,
  Extension,
  FHIRVersion,
  IImplementationGuide,
  ImplementationGuideDefinition,
  ImplementationGuideDependsOn,
  ImplementationGuideGlobal,
  ImplementationGuideManifest,
  PrimitiveBoolean,
  PrimitiveDateTime,
  PrimitiveId,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  SPDXLicense,
  UsageContext,
} from "../internal";

export class ImplementationGuide extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImplementationGuide";

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

  public copyright?: PrimitiveMarkdown;

  public packageId?: PrimitiveId;

  public license?: SPDXLicense;

  public fhirVersion?: Array<FHIRVersion>;

  public dependsOn?: Array<ImplementationGuideDependsOn>;

  public global?: Array<ImplementationGuideGlobal>;

  public definition?: ImplementationGuideDefinition;

  public manifest?: ImplementationGuideManifest;

  public static parse(
    json: IImplementationGuide,
    providedInstance: ImplementationGuide = new ImplementationGuide()
  ): ImplementationGuide {
    const newInstance: ImplementationGuide = DomainResource.parse(json, providedInstance);
  
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
    if (json.copyright) {
      newInstance.copyright = PrimitiveMarkdown.parsePrimitive(json.copyright, json._copyright);
    }
    if (json.packageId) {
      newInstance.packageId = PrimitiveId.parsePrimitive(json.packageId, json._packageId);
    }
    if (json.license) {
      newInstance.license = SPDXLicense.parsePrimitive(json.license, json._license);
    }
    if (json.fhirVersion) {
      newInstance.fhirVersion = json.fhirVersion.map((x, i) => {
        const ext = json._fhirVersion && json._fhirVersion[i];
        return FHIRVersion.parsePrimitive(x, ext);
      });
    }
    if (json.dependsOn) {
      newInstance.dependsOn = json.dependsOn.map((x) => ImplementationGuideDependsOn.parse(x));
    }
    if (json.global) {
      newInstance.global = json.global.map((x) => ImplementationGuideGlobal.parse(x));
    }
    if (json.definition) {
      newInstance.definition = ImplementationGuideDefinition.parse(json.definition);
    }
    if (json.manifest) {
      newInstance.manifest = ImplementationGuideManifest.parse(json.manifest);
    }
    return newInstance;
  }

  public static isImplementationGuide(input?: unknown): input is ImplementationGuide {
    const castInput = input as ImplementationGuide;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImplementationGuide";
  }

  public toJSON(): IImplementationGuide {
    const result: IImplementationGuide = super.toJSON();

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

    if (this.copyright) {
      result.copyright = this.copyright.value;
      result._copyright = Extension.serializePrimitiveExtension(this.copyright);
    }

    if (this.packageId) {
      result.packageId = this.packageId.value;
      result._packageId = Extension.serializePrimitiveExtension(this.packageId);
    }

    if (this.license) {
      result.license = this.license.value;
      result._license = Extension.serializePrimitiveExtension(this.license);
    }

    if (this.fhirVersion) {
      result.fhirVersion = this.fhirVersion.filter(x => !!x).map(x => x.value) as typeof result.fhirVersion;
      result._fhirVersion = Extension.serializePrimitiveExtensionArray(this.fhirVersion);
    }

    if (this.dependsOn) {
      result.dependsOn = this.dependsOn.map((x) => x.toJSON());
    }

    if (this.global) {
      result.global = this.global.map((x) => x.toJSON());
    }

    if (this.definition) {
      result.definition = this.definition.toJSON();
    }

    if (this.manifest) {
      result.manifest = this.manifest.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ImplementationGuide";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
