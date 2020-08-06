/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAdministrativeGender,
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IObservationRangeCategory,
  IPrimitiveString,
  IRange,
} from "../internal";

export interface IObservationDefinitionQualifiedInterval extends IBackboneElement {
  category?: IObservationRangeCategory;
  _category?: IElement;

  range?: IRange;

  context?: ICodeableConcept;

  appliesTo?: Array<ICodeableConcept>;

  gender?: IAdministrativeGender;
  _gender?: IElement;

  age?: IRange;

  gestationalAge?: IRange;

  condition?: IPrimitiveString;
  _condition?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
