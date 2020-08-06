/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  ICoding,
  IConsentProvisionActor,
  IConsentProvisionData,
  IConsentProvisionType,
  IElement,
  IPeriod,
} from "../internal";

export interface IConsentProvision extends IBackboneElement {
  type?: IConsentProvisionType;
  _type?: IElement;

  period?: IPeriod;

  actor?: Array<IConsentProvisionActor>;

  action?: Array<ICodeableConcept>;

  securityLabel?: Array<ICoding>;

  purpose?: Array<ICoding>;

  class?: Array<ICoding>;

  code?: Array<ICodeableConcept>;

  dataPeriod?: IPeriod;

  data?: Array<IConsentProvisionData>;

  provision?: Array<IConsentProvision>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
