/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAttachment,
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
} from "../internal";

export interface ISubstancePolymerRepeatRepeatUnitStructuralRepresentation extends IBackboneElement {
  type?: ICodeableConcept;

  representation?: IPrimitiveString;
  _representation?: IElement;

  attachment?: IAttachment;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
