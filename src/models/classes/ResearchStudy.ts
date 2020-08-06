/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  ContactDetail,
  DomainResource,
  Extension,
  Identifier,
  IResearchStudy,
  Period,
  PrimitiveMarkdown,
  PrimitiveString,
  Reference,
  RelatedArtifact,
  ResearchStudyArm,
  ResearchStudyObjective,
  ResearchStudyStatus,
} from "../internal";

export class ResearchStudy extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ResearchStudy";

  public identifier?: Array<Identifier>;

  public title?: PrimitiveString;

  public protocol?: Array<Reference>;

  public partOf?: Array<Reference>;

  public status?: ResearchStudyStatus;

  public primaryPurposeType?: CodeableConcept;

  public phase?: CodeableConcept;

  public category?: Array<CodeableConcept>;

  public focus?: Array<CodeableConcept>;

  public condition?: Array<CodeableConcept>;

  public contact?: Array<ContactDetail>;

  public relatedArtifact?: Array<RelatedArtifact>;

  public keyword?: Array<CodeableConcept>;

  public location?: Array<CodeableConcept>;

  public description?: PrimitiveMarkdown;

  public enrollment?: Array<Reference>;

  public period?: Period;

  public sponsor?: Reference;

  public principalInvestigator?: Reference;

  public site?: Array<Reference>;

  public reasonStopped?: CodeableConcept;

  public note?: Array<Annotation>;

  public arm?: Array<ResearchStudyArm>;

  public objective?: Array<ResearchStudyObjective>;

  public static parse(
    json: IResearchStudy,
    providedInstance: ResearchStudy = new ResearchStudy()
  ): ResearchStudy {
    const newInstance: ResearchStudy = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.title) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.protocol) {
      newInstance.protocol = json.protocol.map((x) => Reference.parse(x));
    }
    if (json.partOf) {
      newInstance.partOf = json.partOf.map((x) => Reference.parse(x));
    }
    if (json.status) {
      newInstance.status = ResearchStudyStatus.parsePrimitive(json.status, json._status);
    }
    if (json.primaryPurposeType) {
      newInstance.primaryPurposeType = CodeableConcept.parse(json.primaryPurposeType);
    }
    if (json.phase) {
      newInstance.phase = CodeableConcept.parse(json.phase);
    }
    if (json.category) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.focus) {
      newInstance.focus = json.focus.map((x) => CodeableConcept.parse(x));
    }
    if (json.condition) {
      newInstance.condition = json.condition.map((x) => CodeableConcept.parse(x));
    }
    if (json.contact) {
      newInstance.contact = json.contact.map((x) => ContactDetail.parse(x));
    }
    if (json.relatedArtifact) {
      newInstance.relatedArtifact = json.relatedArtifact.map((x) => RelatedArtifact.parse(x));
    }
    if (json.keyword) {
      newInstance.keyword = json.keyword.map((x) => CodeableConcept.parse(x));
    }
    if (json.location) {
      newInstance.location = json.location.map((x) => CodeableConcept.parse(x));
    }
    if (json.description) {
      newInstance.description = PrimitiveMarkdown.parsePrimitive(json.description, json._description);
    }
    if (json.enrollment) {
      newInstance.enrollment = json.enrollment.map((x) => Reference.parse(x));
    }
    if (json.period) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.sponsor) {
      newInstance.sponsor = Reference.parse(json.sponsor);
    }
    if (json.principalInvestigator) {
      newInstance.principalInvestigator = Reference.parse(json.principalInvestigator);
    }
    if (json.site) {
      newInstance.site = json.site.map((x) => Reference.parse(x));
    }
    if (json.reasonStopped) {
      newInstance.reasonStopped = CodeableConcept.parse(json.reasonStopped);
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.arm) {
      newInstance.arm = json.arm.map((x) => ResearchStudyArm.parse(x));
    }
    if (json.objective) {
      newInstance.objective = json.objective.map((x) => ResearchStudyObjective.parse(x));
    }
    return newInstance;
  }

  public static isResearchStudy(input?: unknown): input is ResearchStudy {
    const castInput = input as ResearchStudy;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ResearchStudy";
  }

  public toJSON(): IResearchStudy {
    const result: IResearchStudy = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    if (this.protocol) {
      result.protocol = this.protocol.map((x) => x.toJSON());
    }

    if (this.partOf) {
      result.partOf = this.partOf.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.primaryPurposeType) {
      result.primaryPurposeType = this.primaryPurposeType.toJSON();
    }

    if (this.phase) {
      result.phase = this.phase.toJSON();
    }

    if (this.category) {
      result.category = this.category.map((x) => x.toJSON());
    }

    if (this.focus) {
      result.focus = this.focus.map((x) => x.toJSON());
    }

    if (this.condition) {
      result.condition = this.condition.map((x) => x.toJSON());
    }

    if (this.contact) {
      result.contact = this.contact.map((x) => x.toJSON());
    }

    if (this.relatedArtifact) {
      result.relatedArtifact = this.relatedArtifact.map((x) => x.toJSON());
    }

    if (this.keyword) {
      result.keyword = this.keyword.map((x) => x.toJSON());
    }

    if (this.location) {
      result.location = this.location.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.enrollment) {
      result.enrollment = this.enrollment.map((x) => x.toJSON());
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.sponsor) {
      result.sponsor = this.sponsor.toJSON();
    }

    if (this.principalInvestigator) {
      result.principalInvestigator = this.principalInvestigator.toJSON();
    }

    if (this.site) {
      result.site = this.site.map((x) => x.toJSON());
    }

    if (this.reasonStopped) {
      result.reasonStopped = this.reasonStopped.toJSON();
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.arm) {
      result.arm = this.arm.map((x) => x.toJSON());
    }

    if (this.objective) {
      result.objective = this.objective.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ResearchStudy";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
