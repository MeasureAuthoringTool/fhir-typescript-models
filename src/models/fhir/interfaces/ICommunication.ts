/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  ICommunicationPayload,
  ICommunicationPriority,
  ICommunicationStatus,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveUri,
  IReference,
} from "../internal";

export interface ICommunication extends IDomainResource {
  identifier?: Array<IIdentifier>;

  instantiatesCanonical?: Array<IPrimitiveCanonical>;
  _instantiatesCanonical?: Array<IElement | null>;

  instantiatesUri?: Array<IPrimitiveUri>;
  _instantiatesUri?: Array<IElement | null>;

  basedOn?: Array<IReference>;

  partOf?: Array<IReference>;

  inResponseTo?: Array<IReference>;

  status?: ICommunicationStatus;
  _status?: IElement;

  statusReason?: ICodeableConcept;

  category?: Array<ICodeableConcept>;

  priority?: ICommunicationPriority;
  _priority?: IElement;

  medium?: Array<ICodeableConcept>;

  subject?: IReference;

  topic?: ICodeableConcept;

  about?: Array<IReference>;

  encounter?: IReference;

  sent?: IPrimitiveDateTime;
  _sent?: IElement;

  received?: IPrimitiveDateTime;
  _received?: IElement;

  recipient?: Array<IReference>;

  sender?: IReference;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  payload?: Array<ICommunicationPayload>;

  note?: Array<IAnnotation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
