/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveCode,
  IPrimitiveDateTime,
  IPrimitiveDecimal,
  IPrimitiveInteger,
  IPrimitiveString,
  IPrimitiveUri,
} from "../internal";

export interface IValueSetExpansionParameter extends IBackboneElement {
  name?: IPrimitiveString;
  _name?: IElement;

  valueString?: IPrimitiveString;
  _valueString?: IElement;
  
  valueBoolean?: IPrimitiveBoolean;
  _valueBoolean?: IElement;
  
  valueInteger?: IPrimitiveInteger;
  _valueInteger?: IElement;
  
  valueDecimal?: IPrimitiveDecimal;
  _valueDecimal?: IElement;
  
  valueUri?: IPrimitiveUri;
  _valueUri?: IElement;
  
  valueCode?: IPrimitiveCode;
  _valueCode?: IElement;
  
  valueDateTime?: IPrimitiveDateTime;
  _valueDateTime?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
