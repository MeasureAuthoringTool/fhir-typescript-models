/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  ICommunicationPriority,
  ICommunicationRequestPayload,
  ICommunicationRequestStatus,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveBoolean,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface ICommunicationRequest extends IDomainResource {
  identifier?: Array<IIdentifier>;

  basedOn?: Array<IReference>;

  replaces?: Array<IReference>;

  groupIdentifier?: IIdentifier;

  status?: ICommunicationRequestStatus;
  _status?: IElement;

  statusReason?: ICodeableConcept;

  category?: Array<ICodeableConcept>;

  priority?: ICommunicationPriority;
  _priority?: IElement;

  doNotPerform?: IPrimitiveBoolean;
  _doNotPerform?: IElement;

  medium?: Array<ICodeableConcept>;

  subject?: IReference;

  about?: Array<IReference>;

  encounter?: IReference;

  payload?: Array<ICommunicationRequestPayload>;

  occurrenceDateTime?: IPrimitiveDateTime;
  _occurrenceDateTime?: IElement;
  
  occurrencePeriod?: IPeriod;

  authoredOn?: IPrimitiveDateTime;
  _authoredOn?: IElement;

  requester?: IReference;

  recipient?: Array<IReference>;

  sender?: IReference;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  note?: Array<IAnnotation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
