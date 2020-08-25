/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitBenefitBalanceFinancial,
  IPrimitiveBoolean,
  IPrimitiveString,
} from "../internal";

export interface IExplanationOfBenefitBenefitBalance extends IBackboneElement {
  category?: ICodeableConcept;

  excluded?: IPrimitiveBoolean;
  _excluded?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  network?: ICodeableConcept;

  unit?: ICodeableConcept;

  term?: ICodeableConcept;

  financial?: Array<IExplanationOfBenefitBenefitBalanceFinancial>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
