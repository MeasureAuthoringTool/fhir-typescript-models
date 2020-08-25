/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IDataRequirement,
  IDuration,
  IElement,
  IExpression,
  IGroupMeasure,
  IPeriod,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveString,
  ITiming,
  IUsageContext,
} from "../internal";

export interface IResearchElementDefinitionCharacteristic extends IBackboneElement {
  definitionCodeableConcept?: ICodeableConcept;
  
  definitionCanonical?: IPrimitiveCanonical;
  _definitionCanonical?: IElement;
  
  definitionExpression?: IExpression;
  
  definitionDataRequirement?: IDataRequirement;

  usageContext?: Array<IUsageContext>;

  exclude?: IPrimitiveBoolean;
  _exclude?: IElement;

  unitOfMeasure?: ICodeableConcept;

  studyEffectiveDescription?: IPrimitiveString;
  _studyEffectiveDescription?: IElement;

  studyEffectiveDateTime?: IPrimitiveDateTime;
  _studyEffectiveDateTime?: IElement;
  
  studyEffectivePeriod?: IPeriod;
  
  studyEffectiveDuration?: IDuration;
  
  studyEffectiveTiming?: ITiming;

  studyEffectiveTimeFromStart?: IDuration;

  studyEffectiveGroupMeasure?: IGroupMeasure;
  _studyEffectiveGroupMeasure?: IElement;

  participantEffectiveDescription?: IPrimitiveString;
  _participantEffectiveDescription?: IElement;

  participantEffectiveDateTime?: IPrimitiveDateTime;
  _participantEffectiveDateTime?: IElement;
  
  participantEffectivePeriod?: IPeriod;
  
  participantEffectiveDuration?: IDuration;
  
  participantEffectiveTiming?: ITiming;

  participantEffectiveTimeFromStart?: IDuration;

  participantEffectiveGroupMeasure?: IGroupMeasure;
  _participantEffectiveGroupMeasure?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
