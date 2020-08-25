/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICoding,
  IElement,
  IPrimitiveCanonical,
  IPrimitiveString,
} from "../internal";

export interface IDataRequirementCodeFilter extends IElement {
  path?: IPrimitiveString;
  _path?: IElement;

  searchParam?: IPrimitiveString;
  _searchParam?: IElement;

  valueSet?: IPrimitiveCanonical;
  _valueSet?: IElement;

  code?: Array<ICoding>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
