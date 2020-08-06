/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDeviceRequestParameter,
  IDeviceRequestStatus,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveUri,
  IReference,
  IRequestIntent,
  IRequestPriority,
  ITiming,
} from "../internal";

export interface IDeviceRequest extends IDomainResource {
  identifier?: Array<IIdentifier>;

  instantiatesCanonical?: Array<IPrimitiveCanonical>;
  _instantiatesCanonical?: Array<IElement | null>;

  instantiatesUri?: Array<IPrimitiveUri>;
  _instantiatesUri?: Array<IElement | null>;

  basedOn?: Array<IReference>;

  priorRequest?: Array<IReference>;

  groupIdentifier?: IIdentifier;

  status?: IDeviceRequestStatus;
  _status?: IElement;

  intent?: IRequestIntent;
  _intent?: IElement;

  priority?: IRequestPriority;
  _priority?: IElement;

  codeReference?: IReference;
  
  codeCodeableConcept?: ICodeableConcept;

  parameter?: Array<IDeviceRequestParameter>;

  subject?: IReference;

  encounter?: IReference;

  occurrenceDateTime?: IPrimitiveDateTime;
  _occurrenceDateTime?: IElement;
  
  occurrencePeriod?: IPeriod;
  
  occurrenceTiming?: ITiming;

  authoredOn?: IPrimitiveDateTime;
  _authoredOn?: IElement;

  requester?: IReference;

  performerType?: ICodeableConcept;

  performer?: IReference;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  insurance?: Array<IReference>;

  supportingInfo?: Array<IReference>;

  note?: Array<IAnnotation>;

  relevantHistory?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
