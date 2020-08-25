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
  IDuration,
  IElement,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveString,
  IRange,
  IReference,
  IRelatedArtifact,
  IRequestGroupActionCondition,
  IRequestGroupActionRelatedAction,
  IRequestPriority,
  ITiming,
} from "../internal";

export interface IRequestGroupAction extends IBackboneElement {
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

  documentation?: Array<IRelatedArtifact>;

  condition?: Array<IRequestGroupActionCondition>;

  relatedAction?: Array<IRequestGroupActionRelatedAction>;

  timingDateTime?: IPrimitiveDateTime;
  _timingDateTime?: IElement;
  
  timingAge?: IAge;
  
  timingPeriod?: IPeriod;
  
  timingDuration?: IDuration;
  
  timingRange?: IRange;
  
  timingTiming?: ITiming;

  participant?: Array<IReference>;

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

  resource?: IReference;

  action?: Array<IRequestGroupAction>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
