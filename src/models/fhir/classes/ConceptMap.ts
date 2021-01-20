/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  ConceptMapGroup,
  ContactDetail,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IConceptMap,
  Identifier,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  UsageContext,
  FhirType
} from "../internal";

@FhirType("ConceptMap", "DomainResource")
export class ConceptMap extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ConceptMap";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveUri")
  public url?: PrimitiveUri;

  @FhirField("Identifier")
  public identifier?: Identifier;

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

  @FhirChoice("PrimitiveUri", "PrimitiveCanonical")
  public source?: PrimitiveUri | PrimitiveCanonical;

  @FhirChoice("PrimitiveUri", "PrimitiveCanonical")
  public target?: PrimitiveUri | PrimitiveCanonical;

  @FhirList("ConceptMapGroup")
  public group?: Array<ConceptMapGroup>;

  public static parse(
    json: IConceptMap,
    providedInstance: ConceptMap = new ConceptMap()
  ): ConceptMap {
    const newInstance: ConceptMap = DomainResource.parse(json, providedInstance);
  
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
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
    if (json.sourceUri !== undefined) {
      newInstance.source = PrimitiveUri.parsePrimitive(json.sourceUri, json._sourceUri);
    }
    if (json.sourceCanonical !== undefined) {
      newInstance.source = PrimitiveCanonical.parsePrimitive(json.sourceCanonical, json._sourceCanonical);
    }
    if (json.targetUri !== undefined) {
      newInstance.target = PrimitiveUri.parsePrimitive(json.targetUri, json._targetUri);
    }
    if (json.targetCanonical !== undefined) {
      newInstance.target = PrimitiveCanonical.parsePrimitive(json.targetCanonical, json._targetCanonical);
    }
    if (json.group !== undefined) {
      newInstance.group = json.group.map((x) => ConceptMapGroup.parse(x));
    }
    return newInstance;
  }

  public static isConceptMap(input?: unknown): input is ConceptMap {
    const castInput = input as ConceptMap;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConceptMap";
  }

  public toJSON(): IConceptMap {
    const result: IConceptMap = super.toJSON();

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
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

    if (this.source && PrimitiveUri.isPrimitiveUri(this.source)) {
      result.sourceUri = this.source.value;
      result._sourceUri = Extension.serializePrimitiveExtension(this.source);
    }

    if (this.source && PrimitiveCanonical.isPrimitiveCanonical(this.source)) {
      result.sourceCanonical = this.source.value;
      result._sourceCanonical = Extension.serializePrimitiveExtension(this.source);
    }

    if (this.target && PrimitiveUri.isPrimitiveUri(this.target)) {
      result.targetUri = this.target.value;
      result._targetUri = Extension.serializePrimitiveExtension(this.target);
    }

    if (this.target && PrimitiveCanonical.isPrimitiveCanonical(this.target)) {
      result.targetCanonical = this.target.value;
      result._targetCanonical = Extension.serializePrimitiveExtension(this.target);
    }

    if (this.group) {
      result.group = this.group.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ConceptMap {
    return ConceptMap.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ConceptMap";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
