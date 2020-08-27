/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IDuration,
  IElement,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveString,
} from "../internal";

export interface IDataRequirementDateFilter extends IElement {
  path?: IPrimitiveString;
  _path?: IElement;

  searchParam?: IPrimitiveString;
  _searchParam?: IElement;

  valueDateTime?: IPrimitiveDateTime;
  _valueDateTime?: IElement;
  
  valuePeriod?: IPeriod;
  
  valueDuration?: IDuration;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
