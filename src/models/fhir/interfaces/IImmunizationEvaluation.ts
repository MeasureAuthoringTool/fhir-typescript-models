/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IImmunizationEvaluationStatus,
  IPrimitiveDateTime,
  IPrimitivePositiveInt,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IImmunizationEvaluation extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IImmunizationEvaluationStatus;
  _status?: IElement;

  patient?: IReference;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  authority?: IReference;

  targetDisease?: ICodeableConcept;

  immunizationEvent?: IReference;

  doseStatus?: ICodeableConcept;

  doseStatusReason?: Array<ICodeableConcept>;

  description?: IPrimitiveString;
  _description?: IElement;

  series?: IPrimitiveString;
  _series?: IElement;

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
