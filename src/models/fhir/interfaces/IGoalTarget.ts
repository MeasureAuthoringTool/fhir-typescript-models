/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IDuration,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveDate,
  IPrimitiveInteger,
  IPrimitiveString,
  IQuantity,
  IRange,
  IRatio,
} from "../internal";

export interface IGoalTarget extends IBackboneElement {
  measure?: ICodeableConcept;

  detailQuantity?: IQuantity;
  
  detailRange?: IRange;
  
  detailCodeableConcept?: ICodeableConcept;
  
  detailString?: IPrimitiveString;
  _detailString?: IElement;
  
  detailBoolean?: IPrimitiveBoolean;
  _detailBoolean?: IElement;
  
  detailInteger?: IPrimitiveInteger;
  _detailInteger?: IElement;
  
  detailRatio?: IRatio;

  dueDate?: IPrimitiveDate;
  _dueDate?: IElement;
  
  dueDuration?: IDuration;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
