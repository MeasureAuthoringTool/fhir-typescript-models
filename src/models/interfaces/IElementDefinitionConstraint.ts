/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IConstraintSeverity,
  IElement,
  IPrimitiveCanonical,
  IPrimitiveId,
  IPrimitiveString,
} from "../internal";

export interface IElementDefinitionConstraint extends IElement {
  key?: IPrimitiveId;
  _key?: IElement;

  requirements?: IPrimitiveString;
  _requirements?: IElement;

  severity?: IConstraintSeverity;
  _severity?: IElement;

  human?: IPrimitiveString;
  _human?: IElement;

  expression?: IPrimitiveString;
  _expression?: IElement;

  xpath?: IPrimitiveString;
  _xpath?: IElement;

  source?: IPrimitiveCanonical;
  _source?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
