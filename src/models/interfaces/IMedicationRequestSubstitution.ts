/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveBoolean,
} from "../internal";

export interface IMedicationRequestSubstitution extends IBackboneElement {
  allowedBoolean?: IPrimitiveBoolean;
  _allowedBoolean?: IElement;
  
  allowedCodeableConcept?: ICodeableConcept;

  reason?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
