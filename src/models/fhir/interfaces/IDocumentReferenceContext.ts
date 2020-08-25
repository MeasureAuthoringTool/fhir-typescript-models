/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IPeriod,
  IReference,
} from "../internal";

export interface IDocumentReferenceContext extends IBackboneElement {
  encounter?: Array<IReference>;

  event?: Array<ICodeableConcept>;

  period?: IPeriod;

  facilityType?: ICodeableConcept;

  practiceSetting?: ICodeableConcept;

  sourcePatientInfo?: IReference;

  related?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
