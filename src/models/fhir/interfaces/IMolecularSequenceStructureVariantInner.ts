/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveInteger,
} from "../internal";

export interface IMolecularSequenceStructureVariantInner extends IBackboneElement {
  start?: IPrimitiveInteger;
  _start?: IElement;

  end?: IPrimitiveInteger;
  _end?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
