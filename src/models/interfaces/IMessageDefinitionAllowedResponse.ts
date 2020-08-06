/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveCanonical,
  IPrimitiveMarkdown,
} from "../internal";

export interface IMessageDefinitionAllowedResponse extends IBackboneElement {
  message?: IPrimitiveCanonical;
  _message?: IElement;

  situation?: IPrimitiveMarkdown;
  _situation?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
