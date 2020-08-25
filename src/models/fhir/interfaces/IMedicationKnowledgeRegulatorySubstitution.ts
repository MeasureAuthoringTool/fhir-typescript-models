/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveBoolean,
} from "../internal";

export interface IMedicationKnowledgeRegulatorySubstitution extends IBackboneElement {
  type?: ICodeableConcept;

  allowed?: IPrimitiveBoolean;
  _allowed?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
