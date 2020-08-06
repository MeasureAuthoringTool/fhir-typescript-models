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
} from "../internal";

export class StructureDefinition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureDefinition";

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
  
    if (json.url) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
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
    if (json.keyword) {
      newInstance.keyword = json.keyword.map((x) => Coding.parse(x));
    }
    if (json.fhirVersion) {
      newInstance.fhirVersion = FHIRVersion.parsePrimitive(json.fhirVersion, json._fhirVersion);
    }
    if (json.mapping) {
      newInstance.mapping = json.mapping.map((x) => StructureDefinitionMapping.parse(x));
    }
    if (json.kind) {
      newInstance.kind = StructureDefinitionKind.parsePrimitive(json.kind, json._kind);
    }
    if (json.abstract) {
      newInstance.abstract = PrimitiveBoolean.parsePrimitive(json.abstract, json._abstract);
    }
    if (json.context) {
      newInstance.context = json.context.map((x) => StructureDefinitionContext.parse(x));
    }
    if (json.contextInvariant) {
      newInstance.contextInvariant = json.contextInvariant.map((x, i) => {
        const ext = json._contextInvariant && json._contextInvariant[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.type) {
      newInstance.type = PrimitiveUri.parsePrimitive(json.type, json._type);
    }
    if (json.baseDefinition) {
      newInstance.baseDefinition = PrimitiveCanonical.parsePrimitive(json.baseDefinition, json._baseDefinition);
    }
    if (json.derivation) {
      newInstance.derivation = TypeDerivationRule.parsePrimitive(json.derivation, json._derivation);
    }
    if (json.snapshot) {
      newInstance.snapshot = StructureDefinitionSnapshot.parse(json.snapshot);
    }
    if (json.differential) {
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
  
  public getTypeName(): string {
    return "StructureDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
