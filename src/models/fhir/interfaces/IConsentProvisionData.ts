/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IConsentDataMeaning,
  IElement,
  IReference,
} from "../internal";

export interface IConsentProvisionData extends IBackboneElement {
  meaning?: IConsentDataMeaning;
  _meaning?: IElement;

  reference?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
