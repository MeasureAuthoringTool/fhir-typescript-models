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
  IReference,
  ITiming,
  ITriggerDefinition,
  IUsageContext,
} from "../internal";

export interface IEvidenceVariableCharacteristic extends IBackboneElement {
  description?: IPrimitiveString;
  _description?: IElement;

  definitionReference?: IReference;
  
  definitionCanonical?: IPrimitiveCanonical;
  _definitionCanonical?: IElement;
  
  definitionCodeableConcept?: ICodeableConcept;
  
  definitionExpression?: IExpression;
  
  definitionDataRequirement?: IDataRequirement;
  
  definitionTriggerDefinition?: ITriggerDefinition;

  usageContext?: Array<IUsageContext>;

  exclude?: IPrimitiveBoolean;
  _exclude?: IElement;

  participantEffectiveDateTime?: IPrimitiveDateTime;
  _participantEffectiveDateTime?: IElement;
  
  participantEffectivePeriod?: IPeriod;
  
  participantEffectiveDuration?: IDuration;
  
  participantEffectiveTiming?: ITiming;

  timeFromStart?: IDuration;

  groupMeasure?: IGroupMeasure;
  _groupMeasure?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
