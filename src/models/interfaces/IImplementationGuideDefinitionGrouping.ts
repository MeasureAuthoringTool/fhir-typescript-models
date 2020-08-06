/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveString,
} from "../internal";

export interface IImplementationGuideDefinitionGrouping extends IBackboneElement {
  name?: IPrimitiveString;
  _name?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
