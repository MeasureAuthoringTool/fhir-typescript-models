/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAttachment,
  IBackboneElement,
  IReference,
} from "../internal";

export interface IContractFriendly extends IBackboneElement {
  contentAttachment?: IAttachment;
  
  contentReference?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
