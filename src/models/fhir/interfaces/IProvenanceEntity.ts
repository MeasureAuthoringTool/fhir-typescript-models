/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IProvenanceAgent,
  IProvenanceEntityRole,
  IReference,
} from "../internal";

export interface IProvenanceEntity extends IBackboneElement {
  role?: IProvenanceEntityRole;
  _role?: IElement;

  what?: IReference;

  agent?: Array<IProvenanceAgent>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
