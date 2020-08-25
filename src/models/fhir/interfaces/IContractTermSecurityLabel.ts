/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICoding,
  IElement,
  IPrimitiveUnsignedInt,
} from "../internal";

export interface IContractTermSecurityLabel extends IBackboneElement {
  number?: Array<IPrimitiveUnsignedInt>;
  _number?: Array<IElement | null>;

  classification?: ICoding;

  category?: Array<ICoding>;

  control?: Array<ICoding>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
