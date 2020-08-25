/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveDecimal,
  IVisionBase,
} from "../internal";

export interface IVisionPrescriptionLensSpecificationPrism extends IBackboneElement {
  amount?: IPrimitiveDecimal;
  _amount?: IElement;

  base?: IVisionBase;
  _base?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
