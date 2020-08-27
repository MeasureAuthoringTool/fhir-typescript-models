/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveCanonical,
  IResourceType,
} from "../internal";

export interface IImplementationGuideGlobal extends IBackboneElement {
  type?: IResourceType;
  _type?: IElement;

  profile?: IPrimitiveCanonical;
  _profile?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
