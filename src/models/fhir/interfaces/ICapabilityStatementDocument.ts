/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IDocumentMode,
  IElement,
  IPrimitiveCanonical,
  IPrimitiveMarkdown,
} from "../internal";

export interface ICapabilityStatementDocument extends IBackboneElement {
  mode?: IDocumentMode;
  _mode?: IElement;

  documentation?: IPrimitiveMarkdown;
  _documentation?: IElement;

  profile?: IPrimitiveCanonical;
  _profile?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
