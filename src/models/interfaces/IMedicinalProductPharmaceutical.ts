/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IIdentifier,
  IMedicinalProductPharmaceuticalCharacteristics,
  IMedicinalProductPharmaceuticalRouteOfAdministration,
  IReference,
} from "../internal";

export interface IMedicinalProductPharmaceutical extends IDomainResource {
  identifier?: Array<IIdentifier>;

  administrableDoseForm?: ICodeableConcept;

  unitOfPresentation?: ICodeableConcept;

  ingredient?: Array<IReference>;

  device?: Array<IReference>;

  characteristics?: Array<IMedicinalProductPharmaceuticalCharacteristics>;

  routeOfAdministration?: Array<IMedicinalProductPharmaceuticalRouteOfAdministration>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
