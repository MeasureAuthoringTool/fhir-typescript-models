/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveBoolean,
  IPrimitivePositiveInt,
  IReference,
} from "../internal";

export interface IExplanationOfBenefitCareTeam extends IBackboneElement {
  sequence?: IPrimitivePositiveInt;
  _sequence?: IElement;

  provider?: IReference;

  responsible?: IPrimitiveBoolean;
  _responsible?: IElement;

  role?: ICodeableConcept;

  qualification?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
