/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveString,
} from "../internal";

export interface IExampleScenarioInstanceContainedInstance extends IBackboneElement {
  resourceId?: IPrimitiveString;
  _resourceId?: IElement;

  versionId?: IPrimitiveString;
  _versionId?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
