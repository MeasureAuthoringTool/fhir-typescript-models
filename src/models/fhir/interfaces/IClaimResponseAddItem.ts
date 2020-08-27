/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAddress,
  IBackboneElement,
  IClaimResponseAddItemDetail,
  IClaimResponseItemAdjudication,
  ICodeableConcept,
  IElement,
  IMoney,
  IPeriod,
  IPrimitiveDate,
  IPrimitiveDecimal,
  IPrimitivePositiveInt,
  IReference,
  ISimpleQuantity,
} from "../internal";

export interface IClaimResponseAddItem extends IBackboneElement {
  itemSequence?: Array<IPrimitivePositiveInt>;
  _itemSequence?: Array<IElement | null>;

  detailSequence?: Array<IPrimitivePositiveInt>;
  _detailSequence?: Array<IElement | null>;

  subdetailSequence?: Array<IPrimitivePositiveInt>;
  _subdetailSequence?: Array<IElement | null>;

  provider?: Array<IReference>;

  productOrService?: ICodeableConcept;

  modifier?: Array<ICodeableConcept>;

  programCode?: Array<ICodeableConcept>;

  servicedDate?: IPrimitiveDate;
  _servicedDate?: IElement;
  
  servicedPeriod?: IPeriod;

  locationCodeableConcept?: ICodeableConcept;
  
  locationAddress?: IAddress;
  
  locationReference?: IReference;

  quantity?: ISimpleQuantity;

  unitPrice?: IMoney;

  factor?: IPrimitiveDecimal;
  _factor?: IElement;

  net?: IMoney;

  bodySite?: ICodeableConcept;

  subSite?: Array<ICodeableConcept>;

  noteNumber?: Array<IPrimitivePositiveInt>;
  _noteNumber?: Array<IElement | null>;

  adjudication?: Array<IClaimResponseItemAdjudication>;

  detail?: Array<IClaimResponseAddItemDetail>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
