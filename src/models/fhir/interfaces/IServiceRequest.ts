/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveString,
  IPrimitiveUri,
  IQuantity,
  IRange,
  IRatio,
  IReference,
  IServiceRequestIntent,
  IServiceRequestPriority,
  IServiceRequestStatus,
  ITiming,
} from "../internal";

export interface IServiceRequest extends IDomainResource {
  identifier?: Array<IIdentifier>;

  instantiatesCanonical?: Array<IPrimitiveCanonical>;
  _instantiatesCanonical?: Array<IElement | null>;

  instantiatesUri?: Array<IPrimitiveUri>;
  _instantiatesUri?: Array<IElement | null>;

  basedOn?: Array<IReference>;

  replaces?: Array<IReference>;

  requisition?: IIdentifier;

  status?: IServiceRequestStatus;
  _status?: IElement;

  intent?: IServiceRequestIntent;
  _intent?: IElement;

  category?: Array<ICodeableConcept>;

  priority?: IServiceRequestPriority;
  _priority?: IElement;

  doNotPerform?: IPrimitiveBoolean;
  _doNotPerform?: IElement;

  code?: ICodeableConcept;

  orderDetail?: Array<ICodeableConcept>;

  quantityQuantity?: IQuantity;
  
  quantityRatio?: IRatio;
  
  quantityRange?: IRange;

  subject?: IReference;

  encounter?: IReference;

  occurrenceDateTime?: IPrimitiveDateTime;
  _occurrenceDateTime?: IElement;
  
  occurrencePeriod?: IPeriod;
  
  occurrenceTiming?: ITiming;

  asNeededBoolean?: IPrimitiveBoolean;
  _asNeededBoolean?: IElement;
  
  asNeededCodeableConcept?: ICodeableConcept;

  authoredOn?: IPrimitiveDateTime;
  _authoredOn?: IElement;

  requester?: IReference;

  performerType?: ICodeableConcept;

  performer?: Array<IReference>;

  locationCode?: Array<ICodeableConcept>;

  locationReference?: Array<IReference>;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  insurance?: Array<IReference>;

  supportingInfo?: Array<IReference>;

  specimen?: Array<IReference>;

  bodySite?: Array<ICodeableConcept>;

  note?: Array<IAnnotation>;

  patientInstruction?: IPrimitiveString;
  _patientInstruction?: IElement;

  relevantHistory?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
