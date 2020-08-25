/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveString,
} from "../internal";

export interface IOperationDefinitionParameterReferencedFrom extends IBackboneElement {
  source?: IPrimitiveString;
  _source?: IElement;

  sourceId?: IPrimitiveString;
  _sourceId?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
