/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAuditEventAction,
  IAuditEventAgent,
  IAuditEventEntity,
  IAuditEventOutcome,
  IAuditEventSource,
  ICodeableConcept,
  ICoding,
  IDomainResource,
  IElement,
  IPeriod,
  IPrimitiveInstant,
  IPrimitiveString,
} from "../internal";

export interface IAuditEvent extends IDomainResource {
  type?: ICoding;

  subtype?: Array<ICoding>;

  action?: IAuditEventAction;
  _action?: IElement;

  period?: IPeriod;

  recorded?: IPrimitiveInstant;
  _recorded?: IElement;

  outcome?: IAuditEventOutcome;
  _outcome?: IElement;

  outcomeDesc?: IPrimitiveString;
  _outcomeDesc?: IElement;

  purposeOfEvent?: Array<ICodeableConcept>;

  agent?: Array<IAuditEventAgent>;

  source?: IAuditEventSource;

  entity?: Array<IAuditEventEntity>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
