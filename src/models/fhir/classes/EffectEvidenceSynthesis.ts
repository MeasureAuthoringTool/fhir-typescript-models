/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  ContactDetail,
  DomainResource,
  EffectEvidenceSynthesisCertainty,
  EffectEvidenceSynthesisEffectEstimate,
  EffectEvidenceSynthesisResultsByExposure,
  EffectEvidenceSynthesisSampleSize,
  Extension,
  Identifier,
  IEffectEvidenceSynthesis,
  Period,
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

export class EffectEvidenceSynthesis extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EffectEvidenceSynthesis";

  public url?: PrimitiveUri;

  public identifier?: Array<Identifier>;

  public version?: PrimitiveString;

  public name?: PrimitiveString;

  public title?: PrimitiveString;

  public status?: PublicationStatus;

  public date?: PrimitiveDateTime;

  public publisher?: PrimitiveString;

  public contact?: Array<ContactDetail>;

  public description?: PrimitiveMarkdown;

  public note?: Array<Annotation>;

  public useContext?: Array<UsageContext>;

  public jurisdiction?: Array<CodeableConcept>;

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

  public synthesisType?: CodeableConcept;

  public studyType?: CodeableConcept;

  public population?: Reference;

  public exposure?: Reference;

  public exposureAlternative?: Reference;

  public outcome?: Reference;

  public sampleSize?: EffectEvidenceSynthesisSampleSize;

  public resultsByExposure?: Array<EffectEvidenceSynthesisResultsByExposure>;

  public effectEstimate?: Array<EffectEvidenceSynthesisEffectEstimate>;

  public certainty?: Array<EffectEvidenceSynthesisCertainty>;

  public static parse(
    json: IEffectEvidenceSynthesis,
    providedInstance: EffectEvidenceSynthesis = new EffectEvidenceSynthesis()
  ): EffectEvidenceSynthesis {
    const newInstance: EffectEvidenceSynthesis = DomainResource.parse(json, providedInstance);
  
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
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
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
    if (json.synthesisType) {
      newInstance.synthesisType = CodeableConcept.parse(json.synthesisType);
    }
    if (json.studyType) {
      newInstance.studyType = CodeableConcept.parse(json.studyType);
    }
    if (json.population) {
      newInstance.population = Reference.parse(json.population);
    }
    if (json.exposure) {
      newInstance.exposure = Reference.parse(json.exposure);
    }
    if (json.exposureAlternative) {
      newInstance.exposureAlternative = Reference.parse(json.exposureAlternative);
    }
    if (json.outcome) {
      newInstance.outcome = Reference.parse(json.outcome);
    }
    if (json.sampleSize) {
      newInstance.sampleSize = EffectEvidenceSynthesisSampleSize.parse(json.sampleSize);
    }
    if (json.resultsByExposure) {
      newInstance.resultsByExposure = json.resultsByExposure.map((x) => EffectEvidenceSynthesisResultsByExposure.parse(x));
    }
    if (json.effectEstimate) {
      newInstance.effectEstimate = json.effectEstimate.map((x) => EffectEvidenceSynthesisEffectEstimate.parse(x));
    }
    if (json.certainty) {
      newInstance.certainty = json.certainty.map((x) => EffectEvidenceSynthesisCertainty.parse(x));
    }
    return newInstance;
  }

  public static isEffectEvidenceSynthesis(input?: unknown): input is EffectEvidenceSynthesis {
    const castInput = input as EffectEvidenceSynthesis;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EffectEvidenceSynthesis";
  }

  public toJSON(): IEffectEvidenceSynthesis {
    const result: IEffectEvidenceSynthesis = super.toJSON();

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

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
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

    if (this.synthesisType) {
      result.synthesisType = this.synthesisType.toJSON();
    }

    if (this.studyType) {
      result.studyType = this.studyType.toJSON();
    }

    if (this.population) {
      result.population = this.population.toJSON();
    }

    if (this.exposure) {
      result.exposure = this.exposure.toJSON();
    }

    if (this.exposureAlternative) {
      result.exposureAlternative = this.exposureAlternative.toJSON();
    }

    if (this.outcome) {
      result.outcome = this.outcome.toJSON();
    }

    if (this.sampleSize) {
      result.sampleSize = this.sampleSize.toJSON();
    }

    if (this.resultsByExposure) {
      result.resultsByExposure = this.resultsByExposure.map((x) => x.toJSON());
    }

    if (this.effectEstimate) {
      result.effectEstimate = this.effectEstimate.map((x) => x.toJSON());
    }

    if (this.certainty) {
      result.certainty = this.certainty.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "EffectEvidenceSynthesis";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
