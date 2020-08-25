/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAttachment,
  IElement,
  IPrimitiveCanonical,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IPrimitiveUrl,
  IRelatedArtifactType,
} from "../internal";

export interface IRelatedArtifact extends IElement {
  type?: IRelatedArtifactType;
  _type?: IElement;

  label?: IPrimitiveString;
  _label?: IElement;

  display?: IPrimitiveString;
  _display?: IElement;

  citation?: IPrimitiveMarkdown;
  _citation?: IElement;

  url?: IPrimitiveUrl;
  _url?: IElement;

  document?: IAttachment;

  resource?: IPrimitiveCanonical;
  _resource?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
