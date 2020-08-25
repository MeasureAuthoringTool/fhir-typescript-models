/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  INoteType,
  IPrimitivePositiveInt,
  IPrimitiveString,
} from "../internal";

export interface IClaimResponseProcessNote extends IBackboneElement {
  number?: IPrimitivePositiveInt;
  _number?: IElement;

  type?: INoteType;
  _type?: IElement;

  text?: IPrimitiveString;
  _text?: IElement;

  language?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
