/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitivePositiveInt,
  IReference,
} from "../internal";

export interface IAccountCoverage extends IBackboneElement {
  coverage?: IReference;

  priority?: IPrimitivePositiveInt;
  _priority?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
