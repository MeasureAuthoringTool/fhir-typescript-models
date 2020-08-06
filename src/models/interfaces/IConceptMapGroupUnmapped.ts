/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IConceptMapGroupUnmappedMode,
  IElement,
  IPrimitiveCanonical,
  IPrimitiveCode,
  IPrimitiveString,
} from "../internal";

export interface IConceptMapGroupUnmapped extends IBackboneElement {
  mode?: IConceptMapGroupUnmappedMode;
  _mode?: IElement;

  code?: IPrimitiveCode;
  _code?: IElement;

  display?: IPrimitiveString;
  _display?: IElement;

  url?: IPrimitiveCanonical;
  _url?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
