/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAccountCoverage,
  IAccountGuarantor,
  IAccountStatus,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IAccount extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IAccountStatus;
  _status?: IElement;

  type?: ICodeableConcept;

  name?: IPrimitiveString;
  _name?: IElement;

  subject?: Array<IReference>;

  servicePeriod?: IPeriod;

  coverage?: Array<IAccountCoverage>;

  owner?: IReference;

  description?: IPrimitiveString;
  _description?: IElement;

  guarantor?: Array<IAccountGuarantor>;

  partOf?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
