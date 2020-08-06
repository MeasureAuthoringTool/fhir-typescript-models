/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitivePositiveInt,
  IReference,
} from "../internal";

export interface IClaimDiagnosis extends IBackboneElement {
  sequence?: IPrimitivePositiveInt;
  _sequence?: IElement;

  diagnosisCodeableConcept?: ICodeableConcept;
  
  diagnosisReference?: IReference;

  type?: Array<ICodeableConcept>;

  onAdmission?: ICodeableConcept;

  packageCode?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
