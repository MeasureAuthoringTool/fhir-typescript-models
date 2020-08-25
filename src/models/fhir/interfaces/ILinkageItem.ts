/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  ILinkageType,
  IReference,
} from "../internal";

export interface ILinkageItem extends IBackboneElement {
  type?: ILinkageType;
  _type?: IElement;

  resource?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
