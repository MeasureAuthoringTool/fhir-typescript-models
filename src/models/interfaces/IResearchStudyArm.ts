/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
} from "../internal";

export interface IResearchStudyArm extends IBackboneElement {
  name?: IPrimitiveString;
  _name?: IElement;

  type?: ICodeableConcept;

  description?: IPrimitiveString;
  _description?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
