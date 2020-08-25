/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IDuration,
  IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies,
  IQuantity,
  IRatio,
} from "../internal";

export interface IMedicinalProductPharmaceuticalRouteOfAdministration extends IBackboneElement {
  code?: ICodeableConcept;

  firstDose?: IQuantity;

  maxSingleDose?: IQuantity;

  maxDosePerDay?: IQuantity;

  maxDosePerTreatmentPeriod?: IRatio;

  maxTreatmentPeriod?: IDuration;

  targetSpecies?: Array<IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
