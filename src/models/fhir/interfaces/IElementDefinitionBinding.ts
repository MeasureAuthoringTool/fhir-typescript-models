/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBindingStrength,
  IElement,
  IPrimitiveCanonical,
  IPrimitiveString,
} from "../internal";

export interface IElementDefinitionBinding extends IElement {
  strength?: IBindingStrength;
  _strength?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  valueSet?: IPrimitiveCanonical;
  _valueSet?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
