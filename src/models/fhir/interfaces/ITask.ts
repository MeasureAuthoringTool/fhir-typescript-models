/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveString,
  IPrimitiveUri,
  IReference,
  ITaskInput,
  ITaskIntent,
  ITaskOutput,
  ITaskPriority,
  ITaskRestriction,
  ITaskStatus,
} from "../internal";

export interface ITask extends IDomainResource {
  identifier?: Array<IIdentifier>;

  instantiatesCanonical?: IPrimitiveCanonical;
  _instantiatesCanonical?: IElement;

  instantiatesUri?: IPrimitiveUri;
  _instantiatesUri?: IElement;

  basedOn?: Array<IReference>;

  groupIdentifier?: IIdentifier;

  partOf?: Array<IReference>;

  status?: ITaskStatus;
  _status?: IElement;

  statusReason?: ICodeableConcept;

  businessStatus?: ICodeableConcept;

  intent?: ITaskIntent;
  _intent?: IElement;

  priority?: ITaskPriority;
  _priority?: IElement;

  code?: ICodeableConcept;

  description?: IPrimitiveString;
  _description?: IElement;

  focus?: IReference;

  for?: IReference;

  encounter?: IReference;

  executionPeriod?: IPeriod;

  authoredOn?: IPrimitiveDateTime;
  _authoredOn?: IElement;

  lastModified?: IPrimitiveDateTime;
  _lastModified?: IElement;

  requester?: IReference;

  performerType?: Array<ICodeableConcept>;

  owner?: IReference;

  location?: IReference;

  reasonCode?: ICodeableConcept;

  reasonReference?: IReference;

  insurance?: Array<IReference>;

  note?: Array<IAnnotation>;

  relevantHistory?: Array<IReference>;

  restriction?: ITaskRestriction;

  input?: Array<ITaskInput>;

  output?: Array<ITaskOutput>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
