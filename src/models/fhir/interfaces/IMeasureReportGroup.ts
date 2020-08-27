/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IMeasureReportGroupPopulation,
  IMeasureReportGroupStratifier,
  IQuantity,
} from "../internal";

export interface IMeasureReportGroup extends IBackboneElement {
  code?: ICodeableConcept;

  population?: Array<IMeasureReportGroupPopulation>;

  measureScore?: IQuantity;

  stratifier?: Array<IMeasureReportGroupStratifier>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
