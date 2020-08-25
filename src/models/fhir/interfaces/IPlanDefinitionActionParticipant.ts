/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IActionParticipantType,
  IBackboneElement,
  ICodeableConcept,
  IElement,
} from "../internal";

export interface IPlanDefinitionActionParticipant extends IBackboneElement {
  type?: IActionParticipantType;
  _type?: IElement;

  role?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
