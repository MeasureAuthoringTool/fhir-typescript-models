/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
  IReference,
} from "../internal";

export interface ITestScriptFixture extends IBackboneElement {
  autocreate?: IPrimitiveBoolean;
  _autocreate?: IElement;

  autodelete?: IPrimitiveBoolean;
  _autodelete?: IElement;

  resource?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
