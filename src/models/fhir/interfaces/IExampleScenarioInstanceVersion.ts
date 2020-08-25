/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveMarkdown,
  IPrimitiveString,
} from "../internal";

export interface IExampleScenarioInstanceVersion extends IBackboneElement {
  versionId?: IPrimitiveString;
  _versionId?: IElement;

  description?: IPrimitiveMarkdown;
  _description?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
