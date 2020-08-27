/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IIdentityAssuranceLevel,
  IReference,
} from "../internal";

export interface IPersonLink extends IBackboneElement {
  target?: IReference;

  assurance?: IIdentityAssuranceLevel;
  _assurance?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
