/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveMarkdown,
} from "../internal";

export interface IHealthcareServiceEligibility extends IBackboneElement {
  code?: ICodeableConcept;

  comment?: IPrimitiveMarkdown;
  _comment?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
