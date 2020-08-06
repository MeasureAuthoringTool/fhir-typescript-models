/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICoding,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveCode,
  IPrimitiveDateTime,
  IPrimitiveDecimal,
  IPrimitiveInteger,
  IPrimitiveString,
} from "../internal";

export interface ICodeSystemConceptProperty extends IBackboneElement {
  code?: IPrimitiveCode;
  _code?: IElement;

  valueCode?: IPrimitiveCode;
  _valueCode?: IElement;
  
  valueCoding?: ICoding;
  
  valueString?: IPrimitiveString;
  _valueString?: IElement;
  
  valueInteger?: IPrimitiveInteger;
  _valueInteger?: IElement;
  
  valueBoolean?: IPrimitiveBoolean;
  _valueBoolean?: IElement;
  
  valueDateTime?: IPrimitiveDateTime;
  _valueDateTime?: IElement;
  
  valueDecimal?: IPrimitiveDecimal;
  _valueDecimal?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
