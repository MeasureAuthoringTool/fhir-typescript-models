/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IMeasureReportGroupStratifierStratum,
} from "../internal";

export interface IMeasureReportGroupStratifier extends IBackboneElement {
  code?: Array<ICodeableConcept>;

  stratum?: Array<IMeasureReportGroupStratifierStratum>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
