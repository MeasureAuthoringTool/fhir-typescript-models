/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveMarkdown,
} from "../internal";

export interface ICapabilityStatementRestSecurity extends IBackboneElement {
  cors?: IPrimitiveBoolean;
  _cors?: IElement;

  service?: Array<ICodeableConcept>;

  description?: IPrimitiveMarkdown;
  _description?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
