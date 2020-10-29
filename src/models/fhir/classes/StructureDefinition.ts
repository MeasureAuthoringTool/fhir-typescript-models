/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  Coding,
  ContactDetail,
  DomainResource,
  Extension,
  FHIRVersion,
  Identifier,
  IStructureDefinition,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  StructureDefinitionContext,
  StructureDefinitionDifferential,
  StructureDefinitionKind,
  StructureDefinitionMapping,
  StructureDefinitionSnapshot,
  TypeDerivationRule,
  UsageContext,
  FieldMetadata
} from "../internal";

export class StructureDefinition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureDefinition";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "url",
      fieldType: [PrimitiveUri],
      isArray: false
    }, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
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
      fieldName: "purpose",
      fieldType: [PrimitiveMarkdown],
      isArray: false
    }, {
      fieldName: "copyright",
      fieldType: [PrimitiveMarkdown],
      isArray: false
    }, {
      fieldName: "keyword",
      fieldType: [Coding],
      isArray: true
    }, {
      fieldName: "fhirVersion",
      fieldType: [FHIRVersion],
      isArray: false
    }, {
      fieldName: "mapping",
      fieldType: [StructureDefinitionMapping],
      isArray: true
    }, {
      fieldName: "kind",
      fieldType: [StructureDefinitionKind],
      isArray: false
    }, {
      fieldName: "abstract",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "context",
      fieldType: [StructureDefinitionContext],
      isArray: true
    }, {
      fieldName: "contextInvariant",
      fieldType: [PrimitiveString],
      isArray: true
    }, {
      fieldName: "type",
      fieldType: [PrimitiveUri],
      isArray: false
    }, {
      fieldName: "baseDefinition",
      fieldType: [PrimitiveCanonical],
      isArray: false
    }, {
      fieldName: "derivation",
      fieldType: [TypeDerivationRule],
      isArray: false
    }, {
      fieldName: "snapshot",
      fieldType: [StructureDefinitionSnapshot],
      isArray: false
    }, {
      fieldName: "differential",
      fieldType: [StructureDefinitionDifferential],
      isArray: false
    }];
  }

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

  public keyword?: Array<Coding>;

  public fhirVersion?: FHIRVersion;

  public mapping?: Array<StructureDefinitionMapping>;

  public kind?: StructureDefinitionKind;

  public abstract?: PrimitiveBoolean;

  public context?: Array<StructureDefinitionContext>;

  public contextInvariant?: Array<PrimitiveString>;

  public type?: PrimitiveUri;

  public baseDefinition?: PrimitiveCanonical;

  public derivation?: TypeDerivationRule;

  public snapshot?: StructureDefinitionSnapshot;

  public differential?: StructureDefinitionDifferential;

  public static parse(
    json: IStructureDefinition,
    providedInstance: StructureDefinition = new StructureDefinition()
  ): StructureDefinition {
    const newInstance: StructureDefinition = DomainResource.parse(json, providedInstance);
  
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
    if (json.keyword !== undefined) {
      newInstance.keyword = json.keyword.map((x) => Coding.parse(x));
    }
    if (json.fhirVersion !== undefined) {
      newInstance.fhirVersion = FHIRVersion.parsePrimitive(json.fhirVersion, json._fhirVersion);
    }
    if (json.mapping !== undefined) {
      newInstance.mapping = json.mapping.map((x) => StructureDefinitionMapping.parse(x));
    }
    if (json.kind !== undefined) {
      newInstance.kind = StructureDefinitionKind.parsePrimitive(json.kind, json._kind);
    }
    if (json.abstract !== undefined) {
      newInstance.abstract = PrimitiveBoolean.parsePrimitive(json.abstract, json._abstract);
    }
    if (json.context !== undefined) {
      newInstance.context = json.context.map((x) => StructureDefinitionContext.parse(x));
    }
    if (json.contextInvariant !== undefined) {
      newInstance.contextInvariant = json.contextInvariant.map((x, i) => {
        const ext = json._contextInvariant && json._contextInvariant[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.type !== undefined) {
      newInstance.type = PrimitiveUri.parsePrimitive(json.type, json._type);
    }
    if (json.baseDefinition !== undefined) {
      newInstance.baseDefinition = PrimitiveCanonical.parsePrimitive(json.baseDefinition, json._baseDefinition);
    }
    if (json.derivation !== undefined) {
      newInstance.derivation = TypeDerivationRule.parsePrimitive(json.derivation, json._derivation);
    }
    if (json.snapshot !== undefined) {
      newInstance.snapshot = StructureDefinitionSnapshot.parse(json.snapshot);
    }
    if (json.differential !== undefined) {
      newInstance.differential = StructureDefinitionDifferential.parse(json.differential);
    }
    return newInstance;
  }

  public static isStructureDefinition(input?: unknown): input is StructureDefinition {
    const castInput = input as StructureDefinition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureDefinition";
  }

  public toJSON(): IStructureDefinition {
    const result: IStructureDefinition = super.toJSON();

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

    if (this.keyword) {
      result.keyword = this.keyword.map((x) => x.toJSON());
    }

    if (this.fhirVersion) {
      result.fhirVersion = this.fhirVersion.value;
      result._fhirVersion = Extension.serializePrimitiveExtension(this.fhirVersion);
    }

    if (this.mapping) {
      result.mapping = this.mapping.map((x) => x.toJSON());
    }

    if (this.kind) {
      result.kind = this.kind.value;
      result._kind = Extension.serializePrimitiveExtension(this.kind);
    }

    if (this.abstract) {
      result.abstract = this.abstract.value;
      result._abstract = Extension.serializePrimitiveExtension(this.abstract);
    }

    if (this.context) {
      result.context = this.context.map((x) => x.toJSON());
    }

    if (this.contextInvariant) {
      result.contextInvariant = this.contextInvariant.filter(x => !!x).map(x => x.value) as typeof result.contextInvariant;
      result._contextInvariant = Extension.serializePrimitiveExtensionArray(this.contextInvariant);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.baseDefinition) {
      result.baseDefinition = this.baseDefinition.value;
      result._baseDefinition = Extension.serializePrimitiveExtension(this.baseDefinition);
    }

    if (this.derivation) {
      result.derivation = this.derivation.value;
      result._derivation = Extension.serializePrimitiveExtension(this.derivation);
    }

    if (this.snapshot) {
      result.snapshot = this.snapshot.toJSON();
    }

    if (this.differential) {
      result.differential = this.differential.toJSON();
    }

    return result;
  }

  public clone(): StructureDefinition {
    return StructureDefinition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "StructureDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
