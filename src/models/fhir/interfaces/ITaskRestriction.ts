/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPeriod,
  IPrimitivePositiveInt,
  IReference,
} from "../internal";

export interface ITaskRestriction extends IBackboneElement {
  repetitions?: IPrimitivePositiveInt;
  _repetitions?: IElement;

  period?: IPeriod;

  recipient?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
