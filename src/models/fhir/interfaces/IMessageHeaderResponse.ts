/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveId,
  IReference,
  IResponseType,
} from "../internal";

export interface IMessageHeaderResponse extends IBackboneElement {
  identifier?: IPrimitiveId;
  _identifier?: IElement;

  code?: IResponseType;
  _code?: IElement;

  details?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
