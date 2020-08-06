/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  ILinkType,
  IReference,
} from "../internal";

export interface IPatientLink extends IBackboneElement {
  other?: IReference;

  type?: ILinkType;
  _type?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
