/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveMarkdown,
  ITypeRestfulInteraction,
} from "../internal";

export interface ICapabilityStatementRestResourceInteraction extends IBackboneElement {
  code?: ITypeRestfulInteraction;
  _code?: IElement;

  documentation?: IPrimitiveMarkdown;
  _documentation?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
