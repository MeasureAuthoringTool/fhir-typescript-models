/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitItemAdjudication,
  IMoney,
  IPrimitiveDecimal,
  IPrimitivePositiveInt,
  IReference,
  ISimpleQuantity,
} from "../internal";

export interface IExplanationOfBenefitItemDetailSubDetail extends IBackboneElement {
  sequence?: IPrimitivePositiveInt;
  _sequence?: IElement;

  revenue?: ICodeableConcept;

  category?: ICodeableConcept;

  productOrService?: ICodeableConcept;

  modifier?: Array<ICodeableConcept>;

  programCode?: Array<ICodeableConcept>;

  quantity?: ISimpleQuantity;

  unitPrice?: IMoney;

  factor?: IPrimitiveDecimal;
  _factor?: IElement;

  net?: IMoney;

  udi?: Array<IReference>;

  noteNumber?: Array<IPrimitivePositiveInt>;
  _noteNumber?: Array<IElement | null>;

  adjudication?: Array<IExplanationOfBenefitItemAdjudication>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
