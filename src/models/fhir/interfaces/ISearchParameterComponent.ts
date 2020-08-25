/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveCanonical,
  IPrimitiveString,
} from "../internal";

export interface ISearchParameterComponent extends IBackboneElement {
  definition?: IPrimitiveCanonical;
  _definition?: IElement;

  expression?: IPrimitiveString;
  _expression?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
