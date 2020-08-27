/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IExampleScenarioInstanceContainedInstance,
  IExampleScenarioInstanceVersion,
  IFHIRResourceType,
  IPrimitiveMarkdown,
  IPrimitiveString,
} from "../internal";

export interface IExampleScenarioInstance extends IBackboneElement {
  resourceId?: IPrimitiveString;
  _resourceId?: IElement;

  resourceType?: IFHIRResourceType;
  _resourceType?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  description?: IPrimitiveMarkdown;
  _description?: IElement;

  version?: Array<IExampleScenarioInstanceVersion>;

  containedInstance?: Array<IExampleScenarioInstanceContainedInstance>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
