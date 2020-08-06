/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IExampleScenarioActorType,
  IPrimitiveMarkdown,
  IPrimitiveString,
} from "../internal";

export interface IExampleScenarioActor extends IBackboneElement {
  actorId?: IPrimitiveString;
  _actorId?: IElement;

  type?: IExampleScenarioActorType;
  _type?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  description?: IPrimitiveMarkdown;
  _description?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
