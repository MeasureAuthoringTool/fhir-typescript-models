/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitivePositiveInt,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IImmunizationProtocolApplied extends IBackboneElement {
  series?: IPrimitiveString;
  _series?: IElement;

  authority?: IReference;

  targetDisease?: Array<ICodeableConcept>;

  doseNumberPositiveInt?: IPrimitivePositiveInt;
  _doseNumberPositiveInt?: IElement;
  
  doseNumberString?: IPrimitiveString;
  _doseNumberString?: IElement;

  seriesDosesPositiveInt?: IPrimitivePositiveInt;
  _seriesDosesPositiveInt?: IElement;
  
  seriesDosesString?: IPrimitiveString;
  _seriesDosesString?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
