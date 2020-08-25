/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IExampleScenarioInstanceContainedInstance,
  IPrimitiveBoolean,
  IPrimitiveMarkdown,
  IPrimitiveString,
} from "../internal";

export interface IExampleScenarioProcessStepOperation extends IBackboneElement {
  number?: IPrimitiveString;
  _number?: IElement;

  type?: IPrimitiveString;
  _type?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  initiator?: IPrimitiveString;
  _initiator?: IElement;

  receiver?: IPrimitiveString;
  _receiver?: IElement;

  description?: IPrimitiveMarkdown;
  _description?: IElement;

  initiatorActive?: IPrimitiveBoolean;
  _initiatorActive?: IElement;

  receiverActive?: IPrimitiveBoolean;
  _receiverActive?: IElement;

  request?: IExampleScenarioInstanceContainedInstance;

  response?: IExampleScenarioInstanceContainedInstance;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
