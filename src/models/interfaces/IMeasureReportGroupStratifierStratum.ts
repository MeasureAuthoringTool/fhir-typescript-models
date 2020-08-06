/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IMeasureReportGroupStratifierStratumComponent,
  IMeasureReportGroupStratifierStratumPopulation,
  IQuantity,
} from "../internal";

export interface IMeasureReportGroupStratifierStratum extends IBackboneElement {
  value?: ICodeableConcept;

  component?: Array<IMeasureReportGroupStratifierStratumComponent>;

  population?: Array<IMeasureReportGroupStratifierStratumPopulation>;

  measureScore?: IQuantity;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
