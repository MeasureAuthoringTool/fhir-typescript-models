/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IMarketingStatus,
  IMedicinalProductPackagedBatchIdentifier,
  IMedicinalProductPackagedPackageItem,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IMedicinalProductPackaged extends IDomainResource {
  identifier?: Array<IIdentifier>;

  subject?: Array<IReference>;

  description?: IPrimitiveString;
  _description?: IElement;

  legalStatusOfSupply?: ICodeableConcept;

  marketingStatus?: Array<IMarketingStatus>;

  marketingAuthorization?: IReference;

  manufacturer?: Array<IReference>;

  batchIdentifier?: Array<IMedicinalProductPackagedBatchIdentifier>;

  packageItem?: Array<IMedicinalProductPackagedPackageItem>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
