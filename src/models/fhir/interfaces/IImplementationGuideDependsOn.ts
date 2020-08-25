/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveCanonical,
  IPrimitiveId,
  IPrimitiveString,
} from "../internal";

export interface IImplementationGuideDependsOn extends IBackboneElement {
  uri?: IPrimitiveCanonical;
  _uri?: IElement;

  packageId?: IPrimitiveId;
  _packageId?: IElement;

  version?: IPrimitiveString;
  _version?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
