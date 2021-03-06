/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveBoolean,
} from "../internal";

export interface IRelatedPersonCommunication extends IBackboneElement {
  language?: ICodeableConcept;

  preferred?: IPrimitiveBoolean;
  _preferred?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
