/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IMoney,
  IPrimitiveString,
  IPrimitiveUnsignedInt,
} from "../internal";

export interface IExplanationOfBenefitBenefitBalanceFinancial extends IBackboneElement {
  type?: ICodeableConcept;

  allowedUnsignedInt?: IPrimitiveUnsignedInt;
  _allowedUnsignedInt?: IElement;
  
  allowedString?: IPrimitiveString;
  _allowedString?: IElement;
  
  allowedMoney?: IMoney;

  usedUnsignedInt?: IPrimitiveUnsignedInt;
  _usedUnsignedInt?: IElement;
  
  usedMoney?: IMoney;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
