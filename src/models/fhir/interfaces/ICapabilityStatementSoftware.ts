/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveDateTime,
  IPrimitiveString,
} from "../internal";

export interface ICapabilityStatementSoftware extends IBackboneElement {
  name?: IPrimitiveString;
  _name?: IElement;

  version?: IPrimitiveString;
  _version?: IElement;

  releaseDate?: IPrimitiveDateTime;
  _releaseDate?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
