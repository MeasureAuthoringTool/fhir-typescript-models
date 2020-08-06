/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IGraphDefinitionLinkTarget,
  IPrimitiveInteger,
  IPrimitiveString,
} from "../internal";

export interface IGraphDefinitionLink extends IBackboneElement {
  path?: IPrimitiveString;
  _path?: IElement;

  sliceName?: IPrimitiveString;
  _sliceName?: IElement;

  min?: IPrimitiveInteger;
  _min?: IElement;

  max?: IPrimitiveString;
  _max?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  target?: Array<IGraphDefinitionLinkTarget>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
