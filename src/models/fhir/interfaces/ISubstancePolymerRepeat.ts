/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveInteger,
  IPrimitiveString,
  ISubstancePolymerRepeatRepeatUnit,
} from "../internal";

export interface ISubstancePolymerRepeat extends IBackboneElement {
  numberOfUnits?: IPrimitiveInteger;
  _numberOfUnits?: IElement;

  averageMolecularFormula?: IPrimitiveString;
  _averageMolecularFormula?: IElement;

  repeatUnitAmountType?: ICodeableConcept;

  repeatUnit?: Array<ISubstancePolymerRepeatRepeatUnit>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
