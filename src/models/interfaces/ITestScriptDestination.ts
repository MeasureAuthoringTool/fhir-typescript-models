/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICoding,
  IElement,
  IPrimitiveInteger,
} from "../internal";

export interface ITestScriptDestination extends IBackboneElement {
  index?: IPrimitiveInteger;
  _index?: IElement;

  profile?: ICoding;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
