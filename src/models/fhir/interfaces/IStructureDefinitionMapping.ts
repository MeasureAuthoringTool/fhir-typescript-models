/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveId,
  IPrimitiveString,
  IPrimitiveUri,
} from "../internal";

export interface IStructureDefinitionMapping extends IBackboneElement {
  identity?: IPrimitiveId;
  _identity?: IElement;

  uri?: IPrimitiveUri;
  _uri?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  comment?: IPrimitiveString;
  _comment?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
