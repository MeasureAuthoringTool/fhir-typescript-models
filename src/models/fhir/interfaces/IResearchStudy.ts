/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IContactDetail,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IReference,
  IRelatedArtifact,
  IResearchStudyArm,
  IResearchStudyObjective,
  IResearchStudyStatus,
} from "../internal";

export interface IResearchStudy extends IDomainResource {
  identifier?: Array<IIdentifier>;

  title?: IPrimitiveString;
  _title?: IElement;

  protocol?: Array<IReference>;

  partOf?: Array<IReference>;

  status?: IResearchStudyStatus;
  _status?: IElement;

  primaryPurposeType?: ICodeableConcept;

  phase?: ICodeableConcept;

  category?: Array<ICodeableConcept>;

  focus?: Array<ICodeableConcept>;

  condition?: Array<ICodeableConcept>;

  contact?: Array<IContactDetail>;

  relatedArtifact?: Array<IRelatedArtifact>;

  keyword?: Array<ICodeableConcept>;

  location?: Array<ICodeableConcept>;

  description?: IPrimitiveMarkdown;
  _description?: IElement;

  enrollment?: Array<IReference>;

  period?: IPeriod;

  sponsor?: IReference;

  principalInvestigator?: IReference;

  site?: Array<IReference>;

  reasonStopped?: ICodeableConcept;

  note?: Array<IAnnotation>;

  arm?: Array<IResearchStudyArm>;

  objective?: Array<IResearchStudyObjective>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
