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
  FieldMetadata
} from "../internal";

export class ImplementationGuide extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImplementationGuide";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "url",
      fieldType: [PrimitiveUri],
      isArray: false
    }, {
      fieldName: "version",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "name",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "title",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "status",
      fieldType: [PublicationStatus],
      isArray: false
    }, {
      fieldName: "experimental",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "date",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "publisher",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "contact",
      fieldType: [ContactDetail],
      isArray: true
    }, {
      fieldName: "description",
      fieldType: [PrimitiveMarkdown],
      isArray: false
    }, {
      fieldName: "useContext",
      fieldType: [UsageContext],
      isArray: true
    }, {
      fieldName: "jurisdiction",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "copyright",
      fieldType: [PrimitiveMarkdown],
      isArray: false
    }, {
      fieldName: "packageId",
      fieldType: [PrimitiveId],
      isArray: false
    }, {
      fieldName: "license",
      fieldType: [SPDXLicense],
      isArray: false
    }, {
      fieldName: "fhirVersion",
      fieldType: [FHIRVersion],
      isArray: true
    }, {
      fieldName: "dependsOn",
      fieldType: [ImplementationGuideDependsOn],
      isArray: true
    }, {
      fieldName: "global",
      fieldType: [ImplementationGuideGlobal],
      isArray: true
    }, {
      fieldName: "definition",
      fieldType: [ImplementationGuideDefinition],
      isArray: false
    }, {
      fieldName: "manifest",
      fieldType: [ImplementationGuideManifest],
      isArray: false
    }];
  }

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
    if (json.copyright !== undefined) {
      newInstance.copyright = PrimitiveMarkdown.parsePrimitive(json.copyright, json._copyright);
    }
    if (json.packageId !== undefined) {
      newInstance.packageId = PrimitiveId.parsePrimitive(json.packageId, json._packageId);
    }
    if (json.license !== undefined) {
      newInstance.license = SPDXLicense.parsePrimitive(json.license, json._license);
    }
    if (json.fhirVersion !== undefined) {
      newInstance.fhirVersion = json.fhirVersion.map((x, i) => {
        const ext = json._fhirVersion && json._fhirVersion[i];
        return FHIRVersion.parsePrimitive(x, ext);
      });
    }
    if (json.dependsOn !== undefined) {
      newInstance.dependsOn = json.dependsOn.map((x) => ImplementationGuideDependsOn.parse(x));
    }
    if (json.global !== undefined) {
      newInstance.global = json.global.map((x) => ImplementationGuideGlobal.parse(x));
    }
    if (json.definition !== undefined) {
      newInstance.definition = ImplementationGuideDefinition.parse(json.definition);
    }
    if (json.manifest !== undefined) {
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

  public clone(): ImplementationGuide {
    return ImplementationGuide.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImplementationGuide";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
