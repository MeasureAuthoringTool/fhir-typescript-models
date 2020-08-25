/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveCanonical,
  IPrimitiveMarkdown,
  IPrimitiveString,
  ISearchParamType,
} from "../internal";

export interface ICapabilityStatementRestResourceSearchParam extends IBackboneElement {
  name?: IPrimitiveString;
  _name?: IElement;

  definition?: IPrimitiveCanonical;
  _definition?: IElement;

  type?: ISearchParamType;
  _type?: IElement;

  documentation?: IPrimitiveMarkdown;
  _documentation?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
