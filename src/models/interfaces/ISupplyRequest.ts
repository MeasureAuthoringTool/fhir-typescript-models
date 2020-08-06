/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveDateTime,
  IQuantity,
  IReference,
  IRequestPriority,
  ISupplyRequestParameter,
  ISupplyRequestStatus,
  ITiming,
} from "../internal";

export interface ISupplyRequest extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: ISupplyRequestStatus;
  _status?: IElement;

  category?: ICodeableConcept;

  priority?: IRequestPriority;
  _priority?: IElement;

  itemCodeableConcept?: ICodeableConcept;
  
  itemReference?: IReference;

  quantity?: IQuantity;

  parameter?: Array<ISupplyRequestParameter>;

  occurrenceDateTime?: IPrimitiveDateTime;
  _occurrenceDateTime?: IElement;
  
  occurrencePeriod?: IPeriod;
  
  occurrenceTiming?: ITiming;

  authoredOn?: IPrimitiveDateTime;
  _authoredOn?: IElement;

  requester?: IReference;

  supplier?: Array<IReference>;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  deliverFrom?: IReference;

  deliverTo?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
