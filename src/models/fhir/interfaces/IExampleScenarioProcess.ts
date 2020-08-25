/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IExampleScenarioProcessStep,
  IPrimitiveMarkdown,
  IPrimitiveString,
} from "../internal";

export interface IExampleScenarioProcess extends IBackboneElement {
  title?: IPrimitiveString;
  _title?: IElement;

  description?: IPrimitiveMarkdown;
  _description?: IElement;

  preConditions?: IPrimitiveMarkdown;
  _preConditions?: IElement;

  postConditions?: IPrimitiveMarkdown;
  _postConditions?: IElement;

  step?: Array<IExampleScenarioProcessStep>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
