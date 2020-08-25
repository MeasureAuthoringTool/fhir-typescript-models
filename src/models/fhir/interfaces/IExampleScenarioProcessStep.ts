/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IExampleScenarioProcess,
  IExampleScenarioProcessStepAlternative,
  IExampleScenarioProcessStepOperation,
  IPrimitiveBoolean,
} from "../internal";

export interface IExampleScenarioProcessStep extends IBackboneElement {
  process?: Array<IExampleScenarioProcess>;

  pause?: IPrimitiveBoolean;
  _pause?: IElement;

  operation?: IExampleScenarioProcessStepOperation;

  alternative?: Array<IExampleScenarioProcessStepAlternative>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
