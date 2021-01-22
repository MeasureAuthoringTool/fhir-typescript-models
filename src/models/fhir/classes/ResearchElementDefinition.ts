/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  ContactDetail,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  Identifier,
  IResearchElementDefinition,
  Period,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveDate,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  Reference,
  RelatedArtifact,
  ResearchElementDefinitionCharacteristic,
  ResearchElementType,
  UsageContext,
  VariableType,
  FhirType
} from "../internal";

@FhirType("ResearchElementDefinition", "DomainResource")
export class ResearchElementDefinition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ResearchElementDefinition";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveUri")
  public url?: PrimitiveUri;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("PrimitiveString")
  public version?: PrimitiveString;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveString")
  public title?: PrimitiveString;

  @FhirField("PrimitiveString")
  public shortTitle?: PrimitiveString;

  @FhirField("PrimitiveString")
  public subtitle?: PrimitiveString;

  @FhirField("PublicationStatus")
  public status?: PublicationStatus;

  @FhirField("PrimitiveBoolean")
  public experimental?: PrimitiveBoolean;

  @FhirChoice("CodeableConcept", "Reference")
  public subject?: CodeableConcept | Reference;

  @FhirField("PrimitiveDateTime")
  public date?: PrimitiveDateTime;

  @FhirField("PrimitiveString")
  public publisher?: PrimitiveString;

  @FhirList("ContactDetail")
  public contact?: Array<ContactDetail>;

  @FhirField("PrimitiveMarkdown")
  public description?: PrimitiveMarkdown;

  @FhirList("PrimitiveString")
  public comment?: Array<PrimitiveString>;

  @FhirList("UsageContext")
  public useContext?: Array<UsageContext>;

  @FhirList("CodeableConcept")
  public jurisdiction?: Array<CodeableConcept>;

  @FhirField("PrimitiveMarkdown")
  public purpose?: PrimitiveMarkdown;

  @FhirField("PrimitiveString")
  public usage?: PrimitiveString;

  @FhirField("PrimitiveMarkdown")
  public copyright?: PrimitiveMarkdown;

  @FhirField("PrimitiveDate")
  public approvalDate?: PrimitiveDate;

  @FhirField("PrimitiveDate")
  public lastReviewDate?: PrimitiveDate;

  @FhirField("Period")
  public effectivePeriod?: Period;

  @FhirList("CodeableConcept")
  public topic?: Array<CodeableConcept>;

  @FhirList("ContactDetail")
  public author?: Array<ContactDetail>;

  @FhirList("ContactDetail")
  public editor?: Array<ContactDetail>;

  @FhirList("ContactDetail")
  public reviewer?: Array<ContactDetail>;

  @FhirList("ContactDetail")
  public endorser?: Array<ContactDetail>;

  @FhirList("RelatedArtifact")
  public relatedArtifact?: Array<RelatedArtifact>;

  @FhirList("PrimitiveCanonical")
  public library?: Array<PrimitiveCanonical>;

  @FhirField("ResearchElementType")
  public type?: ResearchElementType;

  @FhirField("VariableType")
  public variableType?: VariableType;

  @FhirList("ResearchElementDefinitionCharacteristic")
  public characteristic?: Array<ResearchElementDefinitionCharacteristic>;

  public static parse(
    json: IResearchElementDefinition,
    providedInstance: ResearchElementDefinition = new ResearchElementDefinition()
  ): ResearchElementDefinition {
    const newInstance: ResearchElementDefinition = DomainResource.parse(json, providedInstance);
  
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
    if (json.shortTitle !== undefined) {
      newInstance.shortTitle = PrimitiveString.parsePrimitive(json.shortTitle, json._shortTitle);
    }
    if (json.subtitle !== undefined) {
      newInstance.subtitle = PrimitiveString.parsePrimitive(json.subtitle, json._subtitle);
    }
    if (json.status !== undefined) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.experimental !== undefined) {
      newInstance.experimental = PrimitiveBoolean.parsePrimitive(json.experimental, json._experimental);
    }
    if (json.subjectCodeableConcept !== undefined) {
      newInstance.subject = CodeableConcept.parse(json.subjectCodeableConcept);
    }
    if (json.subjectReference !== undefined) {
      newInstance.subject = Reference.parse(json.subjectReference);
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
    if (json.comment !== undefined) {
      newInstance.comment = json.comment.map((x, i) => PrimitiveString.parsePrimitive(x, json._comment?.[i]));
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
    if (json.usage !== undefined) {
      newInstance.usage = PrimitiveString.parsePrimitive(json.usage, json._usage);
    }
    if (json.copyright !== undefined) {
      newInstance.copyright = PrimitiveMarkdown.parsePrimitive(json.copyright, json._copyright);
    }
    if (json.approvalDate !== undefined) {
      newInstance.approvalDate = PrimitiveDate.parsePrimitive(json.approvalDate, json._approvalDate);
    }
    if (json.lastReviewDate !== undefined) {
      newInstance.lastReviewDate = PrimitiveDate.parsePrimitive(json.lastReviewDate, json._lastReviewDate);
    }
    if (json.effectivePeriod !== undefined) {
      newInstance.effectivePeriod = Period.parse(json.effectivePeriod);
    }
    if (json.topic !== undefined) {
      newInstance.topic = json.topic.map((x) => CodeableConcept.parse(x));
    }
    if (json.author !== undefined) {
      newInstance.author = json.author.map((x) => ContactDetail.parse(x));
    }
    if (json.editor !== undefined) {
      newInstance.editor = json.editor.map((x) => ContactDetail.parse(x));
    }
    if (json.reviewer !== undefined) {
      newInstance.reviewer = json.reviewer.map((x) => ContactDetail.parse(x));
    }
    if (json.endorser !== undefined) {
      newInstance.endorser = json.endorser.map((x) => ContactDetail.parse(x));
    }
    if (json.relatedArtifact !== undefined) {
      newInstance.relatedArtifact = json.relatedArtifact.map((x) => RelatedArtifact.parse(x));
    }
    if (json.library !== undefined) {
      newInstance.library = json.library.map((x, i) => PrimitiveCanonical.parsePrimitive(x, json._library?.[i]));
    }
    if (json.type !== undefined) {
      newInstance.type = ResearchElementType.parsePrimitive(json.type, json._type);
    }
    if (json.variableType !== undefined) {
      newInstance.variableType = VariableType.parsePrimitive(json.variableType, json._variableType);
    }
    if (json.characteristic !== undefined) {
      newInstance.characteristic = json.characteristic.map((x) => ResearchElementDefinitionCharacteristic.parse(x));
    }
    return newInstance;
  }

  public static isResearchElementDefinition(input?: unknown): input is ResearchElementDefinition {
    const castInput = input as ResearchElementDefinition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ResearchElementDefinition";
  }

  public toJSON(): IResearchElementDefinition {
    const result: IResearchElementDefinition = super.toJSON();

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

    if (this.shortTitle) {
      result.shortTitle = this.shortTitle.value;
      result._shortTitle = Extension.serializePrimitiveExtension(this.shortTitle);
    }

    if (this.subtitle) {
      result.subtitle = this.subtitle.value;
      result._subtitle = Extension.serializePrimitiveExtension(this.subtitle);
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.experimental) {
      result.experimental = this.experimental.value;
      result._experimental = Extension.serializePrimitiveExtension(this.experimental);
    }

    if (this.subject && CodeableConcept.isCodeableConcept(this.subject)) {
      result.subjectCodeableConcept = this.subject.toJSON();
    }

    if (this.subject && Reference.isReference(this.subject)) {
      result.subjectReference = this.subject.toJSON();
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

    if (this.comment) {
      result.comment = this.comment.filter(x => !!x).map(x => x.value) as typeof result.comment;
      result._comment = Extension.serializePrimitiveExtensionArray(this.comment);
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

    if (this.usage) {
      result.usage = this.usage.value;
      result._usage = Extension.serializePrimitiveExtension(this.usage);
    }

    if (this.copyright) {
      result.copyright = this.copyright.value;
      result._copyright = Extension.serializePrimitiveExtension(this.copyright);
    }

    if (this.approvalDate) {
      result.approvalDate = this.approvalDate.value;
      result._approvalDate = Extension.serializePrimitiveExtension(this.approvalDate);
    }

    if (this.lastReviewDate) {
      result.lastReviewDate = this.lastReviewDate.value;
      result._lastReviewDate = Extension.serializePrimitiveExtension(this.lastReviewDate);
    }

    if (this.effectivePeriod) {
      result.effectivePeriod = this.effectivePeriod.toJSON();
    }

    if (this.topic) {
      result.topic = this.topic.map((x) => x.toJSON());
    }

    if (this.author) {
      result.author = this.author.map((x) => x.toJSON());
    }

    if (this.editor) {
      result.editor = this.editor.map((x) => x.toJSON());
    }

    if (this.reviewer) {
      result.reviewer = this.reviewer.map((x) => x.toJSON());
    }

    if (this.endorser) {
      result.endorser = this.endorser.map((x) => x.toJSON());
    }

    if (this.relatedArtifact) {
      result.relatedArtifact = this.relatedArtifact.map((x) => x.toJSON());
    }

    if (this.library) {
      result.library = this.library.filter(x => !!x).map(x => x.value) as typeof result.library;
      result._library = Extension.serializePrimitiveExtensionArray(this.library);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.variableType) {
      result.variableType = this.variableType.value;
      result._variableType = Extension.serializePrimitiveExtension(this.variableType);
    }

    if (this.characteristic) {
      result.characteristic = this.characteristic.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ResearchElementDefinition {
    return ResearchElementDefinition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ResearchElementDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
