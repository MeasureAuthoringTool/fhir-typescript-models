/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAddress,
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitAddItemDetail,
  IExplanationOfBenefitItemAdjudication,
  IMoney,
  IPeriod,
  IPrimitiveDate,
  IPrimitiveDecimal,
  IPrimitivePositiveInt,
  IReference,
  ISimpleQuantity,
} from "../internal";

export interface IExplanationOfBenefitAddItem extends IBackboneElement {
  itemSequence?: Array<IPrimitivePositiveInt>;
  _itemSequence?: Array<IElement | null>;

  detailSequence?: Array<IPrimitivePositiveInt>;
  _detailSequence?: Array<IElement | null>;

  subDetailSequence?: Array<IPrimitivePositiveInt>;
  _subDetailSequence?: Array<IElement | null>;

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

  adjudication?: Array<IExplanationOfBenefitItemAdjudication>;

  detail?: Array<IExplanationOfBenefitAddItemDetail>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
