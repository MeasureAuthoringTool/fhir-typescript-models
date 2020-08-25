/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveDateTime,
  IReference,
  ISupplyDeliveryStatus,
  ISupplyDeliverySuppliedItem,
  ITiming,
} from "../internal";

export interface ISupplyDelivery extends IDomainResource {
  identifier?: Array<IIdentifier>;

  basedOn?: Array<IReference>;

  partOf?: Array<IReference>;

  status?: ISupplyDeliveryStatus;
  _status?: IElement;

  patient?: IReference;

  type?: ICodeableConcept;

  suppliedItem?: ISupplyDeliverySuppliedItem;

  occurrenceDateTime?: IPrimitiveDateTime;
  _occurrenceDateTime?: IElement;
  
  occurrencePeriod?: IPeriod;
  
  occurrenceTiming?: ITiming;

  supplier?: IReference;

  destination?: IReference;

  receiver?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
