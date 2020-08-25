/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IExpression,
  IPrimitiveString,
} from "../internal";

export interface IActivityDefinitionDynamicValue extends IBackboneElement {
  path?: IPrimitiveString;
  _path?: IElement;

  expression?: IExpression;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
