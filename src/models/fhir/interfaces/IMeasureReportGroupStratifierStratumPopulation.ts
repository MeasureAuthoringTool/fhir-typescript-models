/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveInteger,
  IReference,
} from "../internal";

export interface IMeasureReportGroupStratifierStratumPopulation extends IBackboneElement {
  code?: ICodeableConcept;

  count?: IPrimitiveInteger;
  _count?: IElement;

  subjectResults?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
