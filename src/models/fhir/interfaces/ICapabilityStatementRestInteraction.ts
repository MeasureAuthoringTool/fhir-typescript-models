/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveMarkdown,
  ISystemRestfulInteraction,
} from "../internal";

export interface ICapabilityStatementRestInteraction extends IBackboneElement {
  code?: ISystemRestfulInteraction;
  _code?: IElement;

  documentation?: IPrimitiveMarkdown;
  _documentation?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
