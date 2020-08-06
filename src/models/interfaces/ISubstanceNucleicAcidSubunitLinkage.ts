/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IIdentifier,
  IPrimitiveString,
} from "../internal";

export interface ISubstanceNucleicAcidSubunitLinkage extends IBackboneElement {
  connectivity?: IPrimitiveString;
  _connectivity?: IElement;

  identifier?: IIdentifier;

  name?: IPrimitiveString;
  _name?: IElement;

  residueSite?: IPrimitiveString;
  _residueSite?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
