/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
  IQuantity,
} from "../internal";

export interface IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends IBackboneElement {
  tissue?: ICodeableConcept;

  value?: IQuantity;

  supportingInformation?: IPrimitiveString;
  _supportingInformation?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
