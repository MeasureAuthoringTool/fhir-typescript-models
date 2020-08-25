/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  ICoding,
  IDomainResource,
  IElement,
  IIdentifier,
  IMarketingStatus,
  IMedicinalProductManufacturingBusinessOperation,
  IMedicinalProductName,
  IMedicinalProductSpecialDesignation,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IMedicinalProduct extends IDomainResource {
  identifier?: Array<IIdentifier>;

  type?: ICodeableConcept;

  domain?: ICoding;

  combinedPharmaceuticalDoseForm?: ICodeableConcept;

  legalStatusOfSupply?: ICodeableConcept;

  additionalMonitoringIndicator?: ICodeableConcept;

  specialMeasures?: Array<IPrimitiveString>;
  _specialMeasures?: Array<IElement | null>;

  paediatricUseIndicator?: ICodeableConcept;

  productClassification?: Array<ICodeableConcept>;

  marketingStatus?: Array<IMarketingStatus>;

  pharmaceuticalProduct?: Array<IReference>;

  packagedMedicinalProduct?: Array<IReference>;

  attachedDocument?: Array<IReference>;

  masterFile?: Array<IReference>;

  contact?: Array<IReference>;

  clinicalTrial?: Array<IReference>;

  name?: Array<IMedicinalProductName>;

  crossReference?: Array<IIdentifier>;

  manufacturingBusinessOperation?: Array<IMedicinalProductManufacturingBusinessOperation>;

  specialDesignation?: Array<IMedicinalProductSpecialDesignation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
