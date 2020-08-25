/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IMimeType,
  IPrimitiveId,
  IPrimitiveString,
} from "../internal";

export interface IElementDefinitionMapping extends IElement {
  identity?: IPrimitiveId;
  _identity?: IElement;

  language?: IMimeType;
  _language?: IElement;

  map?: IPrimitiveString;
  _map?: IElement;

  comment?: IPrimitiveString;
  _comment?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
