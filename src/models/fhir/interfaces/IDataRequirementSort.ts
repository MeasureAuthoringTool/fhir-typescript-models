/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IPrimitiveString,
  ISortDirection,
} from "../internal";

export interface IDataRequirementSort extends IElement {
  path?: IPrimitiveString;
  _path?: IElement;

  direction?: ISortDirection;
  _direction?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
