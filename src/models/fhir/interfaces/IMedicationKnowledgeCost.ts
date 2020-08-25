/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IMoney,
  IPrimitiveString,
} from "../internal";

export interface IMedicationKnowledgeCost extends IBackboneElement {
  type?: ICodeableConcept;

  source?: IPrimitiveString;
  _source?: IElement;

  cost?: IMoney;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
