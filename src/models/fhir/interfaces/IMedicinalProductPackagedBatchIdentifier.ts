/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IIdentifier,
} from "../internal";

export interface IMedicinalProductPackagedBatchIdentifier extends IBackboneElement {
  outerPackaging?: IIdentifier;

  immediatePackaging?: IIdentifier;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
