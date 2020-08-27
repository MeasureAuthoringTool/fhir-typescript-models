/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IActivityParticipantType,
  IBackboneElement,
  ICodeableConcept,
  IElement,
} from "../internal";

export interface IActivityDefinitionParticipant extends IBackboneElement {
  type?: IActivityParticipantType;
  _type?: IElement;

  role?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
