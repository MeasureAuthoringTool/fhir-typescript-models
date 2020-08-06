/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
} from "../internal";

export interface ICoverageClass extends IBackboneElement {
  type?: ICodeableConcept;

  value?: IPrimitiveString;
  _value?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
