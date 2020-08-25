/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICoding,
  IReference,
  ISignature,
} from "../internal";

export interface IContractSigner extends IBackboneElement {
  type?: ICoding;

  party?: IReference;

  signature?: Array<ISignature>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
