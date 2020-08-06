/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  ActionCardinalityBehavior,
  ActionGroupingBehavior,
  ActionPrecheckBehavior,
  ActionRequiredBehavior,
  ActionSelectionBehavior,
  Age,
  BackboneElement,
  CodeableConcept,
  Duration,
  Extension,
  IRequestGroupAction,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
  Range,
  Reference,
  RelatedArtifact,
  RequestGroupActionCondition,
  RequestGroupActionRelatedAction,
  RequestPriority,
  Timing,
} from "../internal";

export class RequestGroupAction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RequestGroup.Action";

  public prefix?: PrimitiveString;

  public title?: PrimitiveString;

  public description?: PrimitiveString;

  public textEquivalent?: PrimitiveString;

  public priority?: RequestPriority;

  public code?: Array<CodeableConcept>;

  public documentation?: Array<RelatedArtifact>;

  public condition?: Array<RequestGroupActionCondition>;

  public relatedAction?: Array<RequestGroupActionRelatedAction>;

  public timing?: PrimitiveDateTime | Age | Period | Duration | Range | Timing;

  public participant?: Array<Reference>;

  public type?: CodeableConcept;

  public groupingBehavior?: ActionGroupingBehavior;

  public selectionBehavior?: ActionSelectionBehavior;

  public requiredBehavior?: ActionRequiredBehavior;

  public precheckBehavior?: ActionPrecheckBehavior;

  public cardinalityBehavior?: ActionCardinalityBehavior;

  public resource?: Reference;

  public action?: Array<RequestGroupAction>;

  public static parse(
    json: IRequestGroupAction,
    providedInstance: RequestGroupAction = new RequestGroupAction()
  ): RequestGroupAction {
    const newInstance: RequestGroupAction = BackboneElement.parse(json, providedInstance);
  
    if (json.prefix) {
      newInstance.prefix = PrimitiveString.parsePrimitive(json.prefix, json._prefix);
    }
    if (json.title) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.textEquivalent) {
      newInstance.textEquivalent = PrimitiveString.parsePrimitive(json.textEquivalent, json._textEquivalent);
    }
    if (json.priority) {
      newInstance.priority = RequestPriority.parsePrimitive(json.priority, json._priority);
    }
    if (json.code) {
      newInstance.code = json.code.map((x) => CodeableConcept.parse(x));
    }
    if (json.documentation) {
      newInstance.documentation = json.documentation.map((x) => RelatedArtifact.parse(x));
    }
    if (json.condition) {
      newInstance.condition = json.condition.map((x) => RequestGroupActionCondition.parse(x));
    }
    if (json.relatedAction) {
      newInstance.relatedAction = json.relatedAction.map((x) => RequestGroupActionRelatedAction.parse(x));
    }
    if (json.timingDateTime) {
      newInstance.timing = PrimitiveDateTime.parsePrimitive(json.timingDateTime, json._timingDateTime);
    }
    if (json.timingAge) {
      newInstance.timing = Age.parse(json.timingAge);
    }
    if (json.timingPeriod) {
      newInstance.timing = Period.parse(json.timingPeriod);
    }
    if (json.timingDuration) {
      newInstance.timing = Duration.parse(json.timingDuration);
    }
    if (json.timingRange) {
      newInstance.timing = Range.parse(json.timingRange);
    }
    if (json.timingTiming) {
      newInstance.timing = Timing.parse(json.timingTiming);
    }
    if (json.participant) {
      newInstance.participant = json.participant.map((x) => Reference.parse(x));
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.groupingBehavior) {
      newInstance.groupingBehavior = ActionGroupingBehavior.parsePrimitive(json.groupingBehavior, json._groupingBehavior);
    }
    if (json.selectionBehavior) {
      newInstance.selectionBehavior = ActionSelectionBehavior.parsePrimitive(json.selectionBehavior, json._selectionBehavior);
    }
    if (json.requiredBehavior) {
      newInstance.requiredBehavior = ActionRequiredBehavior.parsePrimitive(json.requiredBehavior, json._requiredBehavior);
    }
    if (json.precheckBehavior) {
      newInstance.precheckBehavior = ActionPrecheckBehavior.parsePrimitive(json.precheckBehavior, json._precheckBehavior);
    }
    if (json.cardinalityBehavior) {
      newInstance.cardinalityBehavior = ActionCardinalityBehavior.parsePrimitive(json.cardinalityBehavior, json._cardinalityBehavior);
    }
    if (json.resource) {
      newInstance.resource = Reference.parse(json.resource);
    }
    if (json.action) {
      newInstance.action = json.action.map((x) => RequestGroupAction.parse(x));
    }
    return newInstance;
  }

  public static isRequestGroupAction(input?: unknown): input is RequestGroupAction {
    const castInput = input as RequestGroupAction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RequestGroupAction";
  }

  public toJSON(): IRequestGroupAction {
    const result: IRequestGroupAction = super.toJSON();

    if (this.prefix) {
      result.prefix = this.prefix.value;
      result._prefix = Extension.serializePrimitiveExtension(this.prefix);
    }

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.textEquivalent) {
      result.textEquivalent = this.textEquivalent.value;
      result._textEquivalent = Extension.serializePrimitiveExtension(this.textEquivalent);
    }

    if (this.priority) {
      result.priority = this.priority.value;
      result._priority = Extension.serializePrimitiveExtension(this.priority);
    }

    if (this.code) {
      result.code = this.code.map((x) => x.toJSON());
    }

    if (this.documentation) {
      result.documentation = this.documentation.map((x) => x.toJSON());
    }

    if (this.condition) {
      result.condition = this.condition.map((x) => x.toJSON());
    }

    if (this.relatedAction) {
      result.relatedAction = this.relatedAction.map((x) => x.toJSON());
    }

    if (this.timing && PrimitiveDateTime.isPrimitiveDateTime(this.timing)) {
      result.timingDateTime = this.timing.value;
      result._timingDateTime = Extension.serializePrimitiveExtension(this.timing);
    }

    if (this.timing && Age.isAge(this.timing)) {
      result.timingAge = this.timing.toJSON();
    }

    if (this.timing && Period.isPeriod(this.timing)) {
      result.timingPeriod = this.timing.toJSON();
    }

    if (this.timing && Duration.isDuration(this.timing)) {
      result.timingDuration = this.timing.toJSON();
    }

    if (this.timing && Range.isRange(this.timing)) {
      result.timingRange = this.timing.toJSON();
    }

    if (this.timing && Timing.isTiming(this.timing)) {
      result.timingTiming = this.timing.toJSON();
    }

    if (this.participant) {
      result.participant = this.participant.map((x) => x.toJSON());
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.groupingBehavior) {
      result.groupingBehavior = this.groupingBehavior.value;
      result._groupingBehavior = Extension.serializePrimitiveExtension(this.groupingBehavior);
    }

    if (this.selectionBehavior) {
      result.selectionBehavior = this.selectionBehavior.value;
      result._selectionBehavior = Extension.serializePrimitiveExtension(this.selectionBehavior);
    }

    if (this.requiredBehavior) {
      result.requiredBehavior = this.requiredBehavior.value;
      result._requiredBehavior = Extension.serializePrimitiveExtension(this.requiredBehavior);
    }

    if (this.precheckBehavior) {
      result.precheckBehavior = this.precheckBehavior.value;
      result._precheckBehavior = Extension.serializePrimitiveExtension(this.precheckBehavior);
    }

    if (this.cardinalityBehavior) {
      result.cardinalityBehavior = this.cardinalityBehavior.value;
      result._cardinalityBehavior = Extension.serializePrimitiveExtension(this.cardinalityBehavior);
    }

    if (this.resource) {
      result.resource = this.resource.toJSON();
    }

    if (this.action) {
      result.action = this.action.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "RequestGroupAction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
