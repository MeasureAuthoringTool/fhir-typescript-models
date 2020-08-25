/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveBoolean,
  IReference,
} from "../internal";

export interface IMedicationDispenseSubstitution extends IBackboneElement {
  wasSubstituted?: IPrimitiveBoolean;
  _wasSubstituted?: IElement;

  type?: ICodeableConcept;

  reason?: Array<ICodeableConcept>;

  responsibleParty?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
