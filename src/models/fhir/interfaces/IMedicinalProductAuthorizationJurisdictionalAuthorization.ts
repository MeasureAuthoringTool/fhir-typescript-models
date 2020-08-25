/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IIdentifier,
  IPeriod,
} from "../internal";

export interface IMedicinalProductAuthorizationJurisdictionalAuthorization extends IBackboneElement {
  identifier?: Array<IIdentifier>;

  country?: ICodeableConcept;

  jurisdiction?: Array<ICodeableConcept>;

  legalStatusOfSupply?: ICodeableConcept;

  validityPeriod?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
