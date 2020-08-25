/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPeriod,
  IPrimitiveBoolean,
  IReference,
} from "../internal";

export interface IGroupMember extends IBackboneElement {
  entity?: IReference;

  period?: IPeriod;

  inactive?: IPrimitiveBoolean;
  _inactive?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
