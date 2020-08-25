/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveId,
  IPrimitiveString,
} from "../internal";

export interface ITestScriptVariable extends IBackboneElement {
  name?: IPrimitiveString;
  _name?: IElement;

  defaultValue?: IPrimitiveString;
  _defaultValue?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  expression?: IPrimitiveString;
  _expression?: IElement;

  headerField?: IPrimitiveString;
  _headerField?: IElement;

  hint?: IPrimitiveString;
  _hint?: IElement;

  path?: IPrimitiveString;
  _path?: IElement;

  sourceId?: IPrimitiveId;
  _sourceId?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
