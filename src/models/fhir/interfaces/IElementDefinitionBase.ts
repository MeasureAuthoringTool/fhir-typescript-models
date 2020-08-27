/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IPrimitiveString,
  IPrimitiveUnsignedInt,
} from "../internal";

export interface IElementDefinitionBase extends IElement {
  path?: IPrimitiveString;
  _path?: IElement;

  min?: IPrimitiveUnsignedInt;
  _min?: IElement;

  max?: IPrimitiveString;
  _max?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
