/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  ContactDetail,
  DomainResource,
  Extension,
  Identifier,
  IMeasure,
  MeasureGroup,
  MeasureSupplementalData,
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
  UsageContext,
} from "../internal";

export class Measure extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Measure";

  public url?: PrimitiveUri;

  public identifier?: Array<Identifier>;

  public version?: PrimitiveString;

  public name?: PrimitiveString;

  public title?: PrimitiveString;

  public subtitle?: PrimitiveString;

  public status?: PublicationStatus;

  public experimental?: PrimitiveBoolean;

  public subject?: CodeableConcept | Reference;

  public date?: PrimitiveDateTime;

  public publisher?: PrimitiveString;

  public contact?: Array<ContactDetail>;

  public description?: PrimitiveMarkdown;

  public useContext?: Array<UsageContext>;

  public jurisdiction?: Array<CodeableConcept>;

  public purpose?: PrimitiveMarkdown;

  public usage?: PrimitiveString;

  public copyright?: PrimitiveMarkdown;

  public approvalDate?: PrimitiveDate;

  public lastReviewDate?: PrimitiveDate;

  public effectivePeriod?: Period;

  public topic?: Array<CodeableConcept>;

  public author?: Array<ContactDetail>;

  public editor?: Array<ContactDetail>;

  public reviewer?: Array<ContactDetail>;

  public endorser?: Array<ContactDetail>;

  public relatedArtifact?: Array<RelatedArtifact>;

  public library?: Array<PrimitiveCanonical>;

  public disclaimer?: PrimitiveMarkdown;

  public scoring?: CodeableConcept;

  public compositeScoring?: CodeableConcept;

  public type?: Array<CodeableConcept>;

  public riskAdjustment?: PrimitiveString;

  public rateAggregation?: PrimitiveString;

  public rationale?: PrimitiveMarkdown;

  public clinicalRecommendationStatement?: PrimitiveMarkdown;

  public improvementNotation?: CodeableConcept;

  public definition?: Array<PrimitiveMarkdown>;

  public guidance?: PrimitiveMarkdown;

  public group?: Array<MeasureGroup>;

  public supplementalData?: Array<MeasureSupplementalData>;

  public static parse(
    json: IMeasure,
    providedInstance: Measure = new Measure()
  ): Measure {
    const newInstance: Measure = DomainResource.parse(json, providedInstance);
  
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
    if (json.subtitle) {
      newInstance.subtitle = PrimitiveString.parsePrimitive(json.subtitle, json._subtitle);
    }
    if (json.status) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.experimental) {
      newInstance.experimental = PrimitiveBoolean.parsePrimitive(json.experimental, json._experimental);
    }
    if (json.subjectCodeableConcept) {
      newInstance.subject = CodeableConcept.parse(json.subjectCodeableConcept);
    }
    if (json.subjectReference) {
      newInstance.subject = Reference.parse(json.subjectReference);
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
    if (json.usage) {
      newInstance.usage = PrimitiveString.parsePrimitive(json.usage, json._usage);
    }
    if (json.copyright) {
      newInstance.copyright = PrimitiveMarkdown.parsePrimitive(json.copyright, json._copyright);
    }
    if (json.approvalDate) {
      newInstance.approvalDate = PrimitiveDate.parsePrimitive(json.approvalDate, json._approvalDate);
    }
    if (json.lastReviewDate) {
      newInstance.lastReviewDate = PrimitiveDate.parsePrimitive(json.lastReviewDate, json._lastReviewDate);
    }
    if (json.effectivePeriod) {
      newInstance.effectivePeriod = Period.parse(json.effectivePeriod);
    }
    if (json.topic) {
      newInstance.topic = json.topic.map((x) => CodeableConcept.parse(x));
    }
    if (json.author) {
      newInstance.author = json.author.map((x) => ContactDetail.parse(x));
    }
    if (json.editor) {
      newInstance.editor = json.editor.map((x) => ContactDetail.parse(x));
    }
    if (json.reviewer) {
      newInstance.reviewer = json.reviewer.map((x) => ContactDetail.parse(x));
    }
    if (json.endorser) {
      newInstance.endorser = json.endorser.map((x) => ContactDetail.parse(x));
    }
    if (json.relatedArtifact) {
      newInstance.relatedArtifact = json.relatedArtifact.map((x) => RelatedArtifact.parse(x));
    }
    if (json.library) {
      newInstance.library = json.library.map((x, i) => {
        const ext = json._library && json._library[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    if (json.disclaimer) {
      newInstance.disclaimer = PrimitiveMarkdown.parsePrimitive(json.disclaimer, json._disclaimer);
    }
    if (json.scoring) {
      newInstance.scoring = CodeableConcept.parse(json.scoring);
    }
    if (json.compositeScoring) {
      newInstance.compositeScoring = CodeableConcept.parse(json.compositeScoring);
    }
    if (json.type) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.riskAdjustment) {
      newInstance.riskAdjustment = PrimitiveString.parsePrimitive(json.riskAdjustment, json._riskAdjustment);
    }
    if (json.rateAggregation) {
      newInstance.rateAggregation = PrimitiveString.parsePrimitive(json.rateAggregation, json._rateAggregation);
    }
    if (json.rationale) {
      newInstance.rationale = PrimitiveMarkdown.parsePrimitive(json.rationale, json._rationale);
    }
    if (json.clinicalRecommendationStatement) {
      newInstance.clinicalRecommendationStatement = PrimitiveMarkdown.parsePrimitive(json.clinicalRecommendationStatement, json._clinicalRecommendationStatement);
    }
    if (json.improvementNotation) {
      newInstance.improvementNotation = CodeableConcept.parse(json.improvementNotation);
    }
    if (json.definition) {
      newInstance.definition = json.definition.map((x, i) => {
        const ext = json._definition && json._definition[i];
        return PrimitiveMarkdown.parsePrimitive(x, ext);
      });
    }
    if (json.guidance) {
      newInstance.guidance = PrimitiveMarkdown.parsePrimitive(json.guidance, json._guidance);
    }
    if (json.group) {
      newInstance.group = json.group.map((x) => MeasureGroup.parse(x));
    }
    if (json.supplementalData) {
      newInstance.supplementalData = json.supplementalData.map((x) => MeasureSupplementalData.parse(x));
    }
    return newInstance;
  }

  public static isMeasure(input?: unknown): input is Measure {
    const castInput = input as Measure;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Measure";
  }

  public toJSON(): IMeasure {
    const result: IMeasure = super.toJSON();

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

    if (this.disclaimer) {
      result.disclaimer = this.disclaimer.value;
      result._disclaimer = Extension.serializePrimitiveExtension(this.disclaimer);
    }

    if (this.scoring) {
      result.scoring = this.scoring.toJSON();
    }

    if (this.compositeScoring) {
      result.compositeScoring = this.compositeScoring.toJSON();
    }

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
    }

    if (this.riskAdjustment) {
      result.riskAdjustment = this.riskAdjustment.value;
      result._riskAdjustment = Extension.serializePrimitiveExtension(this.riskAdjustment);
    }

    if (this.rateAggregation) {
      result.rateAggregation = this.rateAggregation.value;
      result._rateAggregation = Extension.serializePrimitiveExtension(this.rateAggregation);
    }

    if (this.rationale) {
      result.rationale = this.rationale.value;
      result._rationale = Extension.serializePrimitiveExtension(this.rationale);
    }

    if (this.clinicalRecommendationStatement) {
      result.clinicalRecommendationStatement = this.clinicalRecommendationStatement.value;
      result._clinicalRecommendationStatement = Extension.serializePrimitiveExtension(this.clinicalRecommendationStatement);
    }

    if (this.improvementNotation) {
      result.improvementNotation = this.improvementNotation.toJSON();
    }

    if (this.definition) {
      result.definition = this.definition.filter(x => !!x).map(x => x.value) as typeof result.definition;
      result._definition = Extension.serializePrimitiveExtensionArray(this.definition);
    }

    if (this.guidance) {
      result.guidance = this.guidance.value;
      result._guidance = Extension.serializePrimitiveExtension(this.guidance);
    }

    if (this.group) {
      result.group = this.group.map((x) => x.toJSON());
    }

    if (this.supplementalData) {
      result.supplementalData = this.supplementalData.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Measure";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
