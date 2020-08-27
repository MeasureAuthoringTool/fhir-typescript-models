/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IConceptMapGroupElement,
  IConceptMapGroupUnmapped,
  IElement,
  IPrimitiveString,
  IPrimitiveUri,
} from "../internal";

export interface IConceptMapGroup extends IBackboneElement {
  source?: IPrimitiveUri;
  _source?: IElement;

  sourceVersion?: IPrimitiveString;
  _sourceVersion?: IElement;

  target?: IPrimitiveUri;
  _target?: IElement;

  targetVersion?: IPrimitiveString;
  _targetVersion?: IElement;

  element?: Array<IConceptMapGroupElement>;

  unmapped?: IConceptMapGroupUnmapped;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
