/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAdverseEventActuality,
  IAdverseEventSuspectEntity,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface IAdverseEvent extends IDomainResource {
  identifier?: IIdentifier;

  actuality?: IAdverseEventActuality;
  _actuality?: IElement;

  category?: Array<ICodeableConcept>;

  event?: ICodeableConcept;

  subject?: IReference;

  encounter?: IReference;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  detected?: IPrimitiveDateTime;
  _detected?: IElement;

  recordedDate?: IPrimitiveDateTime;
  _recordedDate?: IElement;

  resultingCondition?: Array<IReference>;

  location?: IReference;

  seriousness?: ICodeableConcept;

  severity?: ICodeableConcept;

  outcome?: ICodeableConcept;

  recorder?: IReference;

  contributor?: Array<IReference>;

  suspectEntity?: Array<IAdverseEventSuspectEntity>;

  subjectMedicalHistory?: Array<IReference>;

  referenceDocument?: Array<IReference>;

  study?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
