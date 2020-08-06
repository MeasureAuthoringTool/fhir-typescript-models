/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IContactDetail,
  IContributorType,
  IElement,
  IPrimitiveString,
} from "../internal";

export interface IContributor extends IElement {
  type?: IContributorType;
  _type?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  contact?: Array<IContactDetail>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
