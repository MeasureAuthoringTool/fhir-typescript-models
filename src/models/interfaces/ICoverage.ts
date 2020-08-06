/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  ICoverageClass,
  ICoverageCostToBeneficiary,
  ICoverageStatus,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveBoolean,
  IPrimitivePositiveInt,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface ICoverage extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: ICoverageStatus;
  _status?: IElement;

  type?: ICodeableConcept;

  policyHolder?: IReference;

  subscriber?: IReference;

  subscriberId?: IPrimitiveString;
  _subscriberId?: IElement;

  beneficiary?: IReference;

  dependent?: IPrimitiveString;
  _dependent?: IElement;

  relationship?: ICodeableConcept;

  period?: IPeriod;

  payor?: Array<IReference>;

  class?: Array<ICoverageClass>;

  order?: IPrimitivePositiveInt;
  _order?: IElement;

  network?: IPrimitiveString;
  _network?: IElement;

  costToBeneficiary?: Array<ICoverageCostToBeneficiary>;

  subrogation?: IPrimitiveBoolean;
  _subrogation?: IElement;

  contract?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
