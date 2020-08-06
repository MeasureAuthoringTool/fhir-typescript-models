/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAllergyIntoleranceSeverity,
  IAnnotation,
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveDateTime,
  IPrimitiveString,
} from "../internal";

export interface IAllergyIntoleranceReaction extends IBackboneElement {
  substance?: ICodeableConcept;

  manifestation?: Array<ICodeableConcept>;

  description?: IPrimitiveString;
  _description?: IElement;

  onset?: IPrimitiveDateTime;
  _onset?: IElement;

  severity?: IAllergyIntoleranceSeverity;
  _severity?: IElement;

  exposureRoute?: ICodeableConcept;

  note?: Array<IAnnotation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
