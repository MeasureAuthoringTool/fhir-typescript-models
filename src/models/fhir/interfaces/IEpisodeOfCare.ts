/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IEpisodeOfCareDiagnosis,
  IEpisodeOfCareStatus,
  IEpisodeOfCareStatusHistory,
  IIdentifier,
  IPeriod,
  IReference,
} from "../internal";

export interface IEpisodeOfCare extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IEpisodeOfCareStatus;
  _status?: IElement;

  statusHistory?: Array<IEpisodeOfCareStatusHistory>;

  type?: Array<ICodeableConcept>;

  diagnosis?: Array<IEpisodeOfCareDiagnosis>;

  patient?: IReference;

  managingOrganization?: IReference;

  period?: IPeriod;

  referralRequest?: Array<IReference>;

  careManager?: IReference;

  team?: Array<IReference>;

  account?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
