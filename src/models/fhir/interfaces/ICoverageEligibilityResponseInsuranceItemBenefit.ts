/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IMoney,
  IPrimitiveString,
  IPrimitiveUnsignedInt,
} from "../internal";

export interface ICoverageEligibilityResponseInsuranceItemBenefit extends IBackboneElement {
  type?: ICodeableConcept;

  allowedUnsignedInt?: IPrimitiveUnsignedInt;
  _allowedUnsignedInt?: IElement;
  
  allowedString?: IPrimitiveString;
  _allowedString?: IElement;
  
  allowedMoney?: IMoney;

  usedUnsignedInt?: IPrimitiveUnsignedInt;
  _usedUnsignedInt?: IElement;
  
  usedString?: IPrimitiveString;
  _usedString?: IElement;
  
  usedMoney?: IMoney;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
