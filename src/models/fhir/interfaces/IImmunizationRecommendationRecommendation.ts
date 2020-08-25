/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IImmunizationRecommendationRecommendationDateCriterion,
  IPrimitivePositiveInt,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IImmunizationRecommendationRecommendation extends IBackboneElement {
  vaccineCode?: Array<ICodeableConcept>;

  targetDisease?: ICodeableConcept;

  contraindicatedVaccineCode?: Array<ICodeableConcept>;

  forecastStatus?: ICodeableConcept;

  forecastReason?: Array<ICodeableConcept>;

  dateCriterion?: Array<IImmunizationRecommendationRecommendationDateCriterion>;

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

  supportingImmunization?: Array<IReference>;

  supportingPatientInformation?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
