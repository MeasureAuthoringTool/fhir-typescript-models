/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveUri,
  IReference,
  IRequestGroupAction,
  IRequestIntent,
  IRequestPriority,
  IRequestStatus,
} from "../internal";

export interface IRequestGroup extends IDomainResource {
  identifier?: Array<IIdentifier>;

  instantiatesCanonical?: Array<IPrimitiveCanonical>;
  _instantiatesCanonical?: Array<IElement | null>;

  instantiatesUri?: Array<IPrimitiveUri>;
  _instantiatesUri?: Array<IElement | null>;

  basedOn?: Array<IReference>;

  replaces?: Array<IReference>;

  groupIdentifier?: IIdentifier;

  status?: IRequestStatus;
  _status?: IElement;

  intent?: IRequestIntent;
  _intent?: IElement;

  priority?: IRequestPriority;
  _priority?: IElement;

  code?: ICodeableConcept;

  subject?: IReference;

  encounter?: IReference;

  authoredOn?: IPrimitiveDateTime;
  _authoredOn?: IElement;

  author?: IReference;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  note?: Array<IAnnotation>;

  action?: Array<IRequestGroupAction>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
