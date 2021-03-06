/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAddress,
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitItemAdjudication,
  IExplanationOfBenefitItemDetail,
  IMoney,
  IPeriod,
  IPrimitiveDate,
  IPrimitiveDecimal,
  IPrimitivePositiveInt,
  IReference,
  ISimpleQuantity,
} from "../internal";

export interface IExplanationOfBenefitItem extends IBackboneElement {
  sequence?: IPrimitivePositiveInt;
  _sequence?: IElement;

  careTeamSequence?: Array<IPrimitivePositiveInt>;
  _careTeamSequence?: Array<IElement | null>;

  diagnosisSequence?: Array<IPrimitivePositiveInt>;
  _diagnosisSequence?: Array<IElement | null>;

  procedureSequence?: Array<IPrimitivePositiveInt>;
  _procedureSequence?: Array<IElement | null>;

  informationSequence?: Array<IPrimitivePositiveInt>;
  _informationSequence?: Array<IElement | null>;

  revenue?: ICodeableConcept;

  category?: ICodeableConcept;

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

  udi?: Array<IReference>;

  bodySite?: ICodeableConcept;

  subSite?: Array<ICodeableConcept>;

  encounter?: Array<IReference>;

  noteNumber?: Array<IPrimitivePositiveInt>;
  _noteNumber?: Array<IElement | null>;

  adjudication?: Array<IExplanationOfBenefitItemAdjudication>;

  detail?: Array<IExplanationOfBenefitItemDetail>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
