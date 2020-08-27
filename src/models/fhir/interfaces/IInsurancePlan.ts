/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IInsurancePlanContact,
  IInsurancePlanCoverage,
  IInsurancePlanPlan,
  IPeriod,
  IPrimitiveString,
  IPublicationStatus,
  IReference,
} from "../internal";

export interface IInsurancePlan extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IPublicationStatus;
  _status?: IElement;

  type?: Array<ICodeableConcept>;

  name?: IPrimitiveString;
  _name?: IElement;

  alias?: Array<IPrimitiveString>;
  _alias?: Array<IElement | null>;

  period?: IPeriod;

  ownedBy?: IReference;

  administeredBy?: IReference;

  coverageArea?: Array<IReference>;

  contact?: Array<IInsurancePlanContact>;

  endpoint?: Array<IReference>;

  network?: Array<IReference>;

  coverage?: Array<IInsurancePlanCoverage>;

  plan?: Array<IInsurancePlanPlan>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
