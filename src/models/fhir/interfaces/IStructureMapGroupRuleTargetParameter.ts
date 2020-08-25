/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveDecimal,
  IPrimitiveId,
  IPrimitiveInteger,
  IPrimitiveString,
} from "../internal";

export interface IStructureMapGroupRuleTargetParameter extends IBackboneElement {
  valueId?: IPrimitiveId;
  _valueId?: IElement;
  
  valueString?: IPrimitiveString;
  _valueString?: IElement;
  
  valueBoolean?: IPrimitiveBoolean;
  _valueBoolean?: IElement;
  
  valueInteger?: IPrimitiveInteger;
  _valueInteger?: IElement;
  
  valueDecimal?: IPrimitiveDecimal;
  _valueDecimal?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
