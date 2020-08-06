/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface IDetectedIssueMitigation extends IBackboneElement {
  action?: ICodeableConcept;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  author?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
