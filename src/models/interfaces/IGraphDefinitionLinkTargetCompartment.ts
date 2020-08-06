/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICompartmentCode,
  IElement,
  IGraphCompartmentRule,
  IGraphCompartmentUse,
  IPrimitiveString,
} from "../internal";

export interface IGraphDefinitionLinkTargetCompartment extends IBackboneElement {
  use?: IGraphCompartmentUse;
  _use?: IElement;

  code?: ICompartmentCode;
  _code?: IElement;

  rule?: IGraphCompartmentRule;
  _rule?: IElement;

  expression?: IPrimitiveString;
  _expression?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
