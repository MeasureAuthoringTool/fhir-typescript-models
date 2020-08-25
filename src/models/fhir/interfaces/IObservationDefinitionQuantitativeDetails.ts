/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveDecimal,
  IPrimitiveInteger,
} from "../internal";

export interface IObservationDefinitionQuantitativeDetails extends IBackboneElement {
  customaryUnit?: ICodeableConcept;

  unit?: ICodeableConcept;

  conversionFactor?: IPrimitiveDecimal;
  _conversionFactor?: IElement;

  decimalPrecision?: IPrimitiveInteger;
  _decimalPrecision?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
