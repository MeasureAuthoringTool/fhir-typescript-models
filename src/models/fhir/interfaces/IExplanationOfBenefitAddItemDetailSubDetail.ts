/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitItemAdjudication,
  IMoney,
  IPrimitiveDecimal,
  IPrimitivePositiveInt,
  ISimpleQuantity,
} from "../internal";

export interface IExplanationOfBenefitAddItemDetailSubDetail extends IBackboneElement {
  productOrService?: ICodeableConcept;

  modifier?: Array<ICodeableConcept>;

  quantity?: ISimpleQuantity;

  unitPrice?: IMoney;

  factor?: IPrimitiveDecimal;
  _factor?: IElement;

  net?: IMoney;

  noteNumber?: Array<IPrimitivePositiveInt>;
  _noteNumber?: Array<IElement | null>;

  adjudication?: Array<IExplanationOfBenefitItemAdjudication>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
