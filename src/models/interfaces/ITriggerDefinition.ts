/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IDataRequirement,
  IElement,
  IExpression,
  IPrimitiveDate,
  IPrimitiveDateTime,
  IPrimitiveString,
  IReference,
  ITiming,
  ITriggerType,
} from "../internal";

export interface ITriggerDefinition extends IElement {
  type?: ITriggerType;
  _type?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  timingTiming?: ITiming;
  
  timingReference?: IReference;
  
  timingDate?: IPrimitiveDate;
  _timingDate?: IElement;
  
  timingDateTime?: IPrimitiveDateTime;
  _timingDateTime?: IElement;

  data?: Array<IDataRequirement>;

  condition?: IExpression;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
