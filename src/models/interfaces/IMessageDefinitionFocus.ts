/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveCanonical,
  IPrimitiveString,
  IPrimitiveUnsignedInt,
  IResourceType,
} from "../internal";

export interface IMessageDefinitionFocus extends IBackboneElement {
  code?: IResourceType;
  _code?: IElement;

  profile?: IPrimitiveCanonical;
  _profile?: IElement;

  min?: IPrimitiveUnsignedInt;
  _min?: IElement;

  max?: IPrimitiveString;
  _max?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
