/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBase64Binary,
  IPrimitiveString,
} from "../internal";

export interface IAuditEventEntityDetail extends IBackboneElement {
  type?: IPrimitiveString;
  _type?: IElement;

  valueString?: IPrimitiveString;
  _valueString?: IElement;
  
  valueBase64Binary?: IPrimitiveBase64Binary;
  _valueBase64Binary?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
