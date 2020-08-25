/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveString,
} from "../internal";

export interface IChargeItemDefinitionApplicability extends IBackboneElement {
  description?: IPrimitiveString;
  _description?: IElement;

  language?: IPrimitiveString;
  _language?: IElement;

  expression?: IPrimitiveString;
  _expression?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
