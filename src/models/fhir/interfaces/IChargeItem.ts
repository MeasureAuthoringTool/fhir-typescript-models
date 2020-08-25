/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  IChargeItemPerformer,
  IChargeItemStatus,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IMoney,
  IPeriod,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveDecimal,
  IPrimitiveString,
  IPrimitiveUri,
  IQuantity,
  IReference,
  ITiming,
} from "../internal";

export interface IChargeItem extends IDomainResource {
  identifier?: Array<IIdentifier>;

  definitionUri?: Array<IPrimitiveUri>;
  _definitionUri?: Array<IElement | null>;

  definitionCanonical?: Array<IPrimitiveCanonical>;
  _definitionCanonical?: Array<IElement | null>;

  status?: IChargeItemStatus;
  _status?: IElement;

  partOf?: Array<IReference>;

  code?: ICodeableConcept;

  subject?: IReference;

  context?: IReference;

  occurrenceDateTime?: IPrimitiveDateTime;
  _occurrenceDateTime?: IElement;
  
  occurrencePeriod?: IPeriod;
  
  occurrenceTiming?: ITiming;

  performer?: Array<IChargeItemPerformer>;

  performingOrganization?: IReference;

  requestingOrganization?: IReference;

  costCenter?: IReference;

  quantity?: IQuantity;

  bodysite?: Array<ICodeableConcept>;

  factorOverride?: IPrimitiveDecimal;
  _factorOverride?: IElement;

  priceOverride?: IMoney;

  overrideReason?: IPrimitiveString;
  _overrideReason?: IElement;

  enterer?: IReference;

  enteredDate?: IPrimitiveDateTime;
  _enteredDate?: IElement;

  reason?: Array<ICodeableConcept>;

  service?: Array<IReference>;

  productReference?: IReference;
  
  productCodeableConcept?: ICodeableConcept;

  account?: Array<IReference>;

  note?: Array<IAnnotation>;

  supportingInformation?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
