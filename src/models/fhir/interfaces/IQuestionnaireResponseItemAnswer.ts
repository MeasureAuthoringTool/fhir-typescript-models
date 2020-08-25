/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAttachment,
  IBackboneElement,
  ICoding,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveDate,
  IPrimitiveDateTime,
  IPrimitiveDecimal,
  IPrimitiveInteger,
  IPrimitiveString,
  IPrimitiveTime,
  IPrimitiveUri,
  IQuantity,
  IQuestionnaireResponseItem,
  IReference,
} from "../internal";

export interface IQuestionnaireResponseItemAnswer extends IBackboneElement {
  valueBoolean?: IPrimitiveBoolean;
  _valueBoolean?: IElement;
  
  valueDecimal?: IPrimitiveDecimal;
  _valueDecimal?: IElement;
  
  valueInteger?: IPrimitiveInteger;
  _valueInteger?: IElement;
  
  valueDate?: IPrimitiveDate;
  _valueDate?: IElement;
  
  valueDateTime?: IPrimitiveDateTime;
  _valueDateTime?: IElement;
  
  valueTime?: IPrimitiveTime;
  _valueTime?: IElement;
  
  valueString?: IPrimitiveString;
  _valueString?: IElement;
  
  valueUri?: IPrimitiveUri;
  _valueUri?: IElement;
  
  valueAttachment?: IAttachment;
  
  valueCoding?: ICoding;
  
  valueQuantity?: IQuantity;
  
  valueReference?: IReference;

  item?: Array<IQuestionnaireResponseItem>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
