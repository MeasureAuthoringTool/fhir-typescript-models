/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IIdentifier,
  IReference,
} from "../internal";

export interface IEncounterHospitalization extends IBackboneElement {
  preAdmissionIdentifier?: IIdentifier;

  origin?: IReference;

  admitSource?: ICodeableConcept;

  reAdmission?: ICodeableConcept;

  dietPreference?: Array<ICodeableConcept>;

  specialCourtesy?: Array<ICodeableConcept>;

  specialArrangement?: Array<ICodeableConcept>;

  destination?: IReference;

  dischargeDisposition?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
