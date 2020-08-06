/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IGoalLifecycleStatus,
  IGoalTarget,
  IIdentifier,
  IPrimitiveDate,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IGoal extends IDomainResource {
  identifier?: Array<IIdentifier>;

  lifecycleStatus?: IGoalLifecycleStatus;
  _lifecycleStatus?: IElement;

  achievementStatus?: ICodeableConcept;

  category?: Array<ICodeableConcept>;

  priority?: ICodeableConcept;

  description?: ICodeableConcept;

  subject?: IReference;

  startDate?: IPrimitiveDate;
  _startDate?: IElement;
  
  startCodeableConcept?: ICodeableConcept;

  target?: Array<IGoalTarget>;

  statusDate?: IPrimitiveDate;
  _statusDate?: IElement;

  statusReason?: IPrimitiveString;
  _statusReason?: IElement;

  expressedBy?: IReference;

  addresses?: Array<IReference>;

  note?: Array<IAnnotation>;

  outcomeCode?: Array<ICodeableConcept>;

  outcomeReference?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
