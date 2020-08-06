/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveBoolean,
  ISubstanceAmount,
} from "../internal";

export interface ISubstancePolymerMonomerSetStartingMaterial extends IBackboneElement {
  material?: ICodeableConcept;

  type?: ICodeableConcept;

  isDefining?: IPrimitiveBoolean;
  _isDefining?: IElement;

  amount?: ISubstanceAmount;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
