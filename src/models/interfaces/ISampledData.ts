/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IPrimitiveDecimal,
  IPrimitivePositiveInt,
  IPrimitiveString,
  ISimpleQuantity,
} from "../internal";

export interface ISampledData extends IElement {
  origin?: ISimpleQuantity;

  period?: IPrimitiveDecimal;
  _period?: IElement;

  factor?: IPrimitiveDecimal;
  _factor?: IElement;

  lowerLimit?: IPrimitiveDecimal;
  _lowerLimit?: IElement;

  upperLimit?: IPrimitiveDecimal;
  _upperLimit?: IElement;

  dimensions?: IPrimitivePositiveInt;
  _dimensions?: IElement;

  data?: IPrimitiveString;
  _data?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
