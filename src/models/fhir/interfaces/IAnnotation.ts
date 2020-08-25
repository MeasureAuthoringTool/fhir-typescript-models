/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IAnnotation extends IElement {
  authorReference?: IReference;
  
  authorString?: IPrimitiveString;
  _authorString?: IElement;

  time?: IPrimitiveDateTime;
  _time?: IElement;

  text?: IPrimitiveMarkdown;
  _text?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
