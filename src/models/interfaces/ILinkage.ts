/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IDomainResource,
  IElement,
  ILinkageItem,
  IPrimitiveBoolean,
  IReference,
} from "../internal";

export interface ILinkage extends IDomainResource {
  active?: IPrimitiveBoolean;
  _active?: IElement;

  author?: IReference;

  item?: Array<ILinkageItem>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
