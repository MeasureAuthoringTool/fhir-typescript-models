/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IPlanDefinitionGoalTarget,
  IRelatedArtifact,
} from "../internal";

export interface IPlanDefinitionGoal extends IBackboneElement {
  category?: ICodeableConcept;

  description?: ICodeableConcept;

  priority?: ICodeableConcept;

  start?: ICodeableConcept;

  addresses?: Array<ICodeableConcept>;

  documentation?: Array<IRelatedArtifact>;

  target?: Array<IPlanDefinitionGoalTarget>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
