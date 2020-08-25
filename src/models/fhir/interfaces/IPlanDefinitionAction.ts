/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IActionCardinalityBehavior,
  IActionGroupingBehavior,
  IActionPrecheckBehavior,
  IActionRequiredBehavior,
  IActionSelectionBehavior,
  IAge,
  IBackboneElement,
  ICodeableConcept,
  IDataRequirement,
  IDuration,
  IElement,
  IPeriod,
  IPlanDefinitionActionCondition,
  IPlanDefinitionActionDynamicValue,
  IPlanDefinitionActionParticipant,
  IPlanDefinitionActionRelatedAction,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveId,
  IPrimitiveString,
  IPrimitiveUri,
  IRange,
  IReference,
  IRelatedArtifact,
  IRequestPriority,
  ITiming,
  ITriggerDefinition,
} from "../internal";

export interface IPlanDefinitionAction extends IBackboneElement {
  prefix?: IPrimitiveString;
  _prefix?: IElement;

  title?: IPrimitiveString;
  _title?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  textEquivalent?: IPrimitiveString;
  _textEquivalent?: IElement;

  priority?: IRequestPriority;
  _priority?: IElement;

  code?: Array<ICodeableConcept>;

  reason?: Array<ICodeableConcept>;

  documentation?: Array<IRelatedArtifact>;

  goalId?: Array<IPrimitiveId>;
  _goalId?: Array<IElement | null>;

  subjectCodeableConcept?: ICodeableConcept;
  
  subjectReference?: IReference;

  trigger?: Array<ITriggerDefinition>;

  condition?: Array<IPlanDefinitionActionCondition>;

  input?: Array<IDataRequirement>;

  output?: Array<IDataRequirement>;

  relatedAction?: Array<IPlanDefinitionActionRelatedAction>;

  timingDateTime?: IPrimitiveDateTime;
  _timingDateTime?: IElement;
  
  timingAge?: IAge;
  
  timingPeriod?: IPeriod;
  
  timingDuration?: IDuration;
  
  timingRange?: IRange;
  
  timingTiming?: ITiming;

  participant?: Array<IPlanDefinitionActionParticipant>;

  type?: ICodeableConcept;

  groupingBehavior?: IActionGroupingBehavior;
  _groupingBehavior?: IElement;

  selectionBehavior?: IActionSelectionBehavior;
  _selectionBehavior?: IElement;

  requiredBehavior?: IActionRequiredBehavior;
  _requiredBehavior?: IElement;

  precheckBehavior?: IActionPrecheckBehavior;
  _precheckBehavior?: IElement;

  cardinalityBehavior?: IActionCardinalityBehavior;
  _cardinalityBehavior?: IElement;

  definitionCanonical?: IPrimitiveCanonical;
  _definitionCanonical?: IElement;
  
  definitionUri?: IPrimitiveUri;
  _definitionUri?: IElement;

  transform?: IPrimitiveCanonical;
  _transform?: IElement;

  dynamicValue?: Array<IPlanDefinitionActionDynamicValue>;

  action?: Array<IPlanDefinitionAction>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
