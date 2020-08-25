/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveString,
  IResourceType,
} from "../internal";

export interface ICompartmentDefinitionResource extends IBackboneElement {
  code?: IResourceType;
  _code?: IElement;

  param?: Array<IPrimitiveString>;
  _param?: Array<IElement | null>;

  documentation?: IPrimitiveString;
  _documentation?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
