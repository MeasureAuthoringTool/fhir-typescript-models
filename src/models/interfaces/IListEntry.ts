/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface IListEntry extends IBackboneElement {
  flag?: ICodeableConcept;

  deleted?: IPrimitiveBoolean;
  _deleted?: IElement;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  item?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
