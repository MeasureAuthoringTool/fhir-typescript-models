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
  FhirChoice,
  FhirField,
  FhirList,
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
  FhirType
} from "../internal";

@FhirType("RequestGroupAction", "BackboneElement")
export class RequestGroupAction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RequestGroup.Action";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public prefix?: PrimitiveString;

  @FhirField("PrimitiveString")
  public title?: PrimitiveString;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("PrimitiveString")
  public textEquivalent?: PrimitiveString;

  @FhirField("RequestPriority")
  public priority?: RequestPriority;

  @FhirList("CodeableConcept")
  public code?: Array<CodeableConcept>;

  @FhirList("RelatedArtifact")
  public documentation?: Array<RelatedArtifact>;

  @FhirList("RequestGroupActionCondition")
  public condition?: Array<RequestGroupActionCondition>;

  @FhirList("RequestGroupActionRelatedAction")
  public relatedAction?: Array<RequestGroupActionRelatedAction>;

  @FhirChoice("PrimitiveDateTime", "Age", "Period", "Duration", "Range", "Timing")
  public timing?: PrimitiveDateTime | Age | Period | Duration | Range | Timing;

  @FhirList("Reference")
  public participant?: Array<Reference>;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("ActionGroupingBehavior")
  public groupingBehavior?: ActionGroupingBehavior;

  @FhirField("ActionSelectionBehavior")
  public selectionBehavior?: ActionSelectionBehavior;

  @FhirField("ActionRequiredBehavior")
  public requiredBehavior?: ActionRequiredBehavior;

  @FhirField("ActionPrecheckBehavior")
  public precheckBehavior?: ActionPrecheckBehavior;

  @FhirField("ActionCardinalityBehavior")
  public cardinalityBehavior?: ActionCardinalityBehavior;

  @FhirField("Reference")
  public resource?: Reference;

  @FhirList("RequestGroupAction")
  public action?: Array<RequestGroupAction>;

  public static parse(
    json: IRequestGroupAction,
    providedInstance: RequestGroupAction = new RequestGroupAction()
  ): RequestGroupAction {
    const newInstance: RequestGroupAction = BackboneElement.parse(json, providedInstance);
  
    if (json.prefix !== undefined) {
      newInstance.prefix = PrimitiveString.parsePrimitive(json.prefix, json._prefix);
    }
    if (json.title !== undefined) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.textEquivalent !== undefined) {
      newInstance.textEquivalent = PrimitiveString.parsePrimitive(json.textEquivalent, json._textEquivalent);
    }
    if (json.priority !== undefined) {
      newInstance.priority = RequestPriority.parsePrimitive(json.priority, json._priority);
    }
    if (json.code !== undefined) {
      newInstance.code = json.code.map((x) => CodeableConcept.parse(x));
    }
    if (json.documentation !== undefined) {
      newInstance.documentation = json.documentation.map((x) => RelatedArtifact.parse(x));
    }
    if (json.condition !== undefined) {
      newInstance.condition = json.condition.map((x) => RequestGroupActionCondition.parse(x));
    }
    if (json.relatedAction !== undefined) {
      newInstance.relatedAction = json.relatedAction.map((x) => RequestGroupActionRelatedAction.parse(x));
    }
    if (json.timingDateTime !== undefined) {
      newInstance.timing = PrimitiveDateTime.parsePrimitive(json.timingDateTime, json._timingDateTime);
    }
    if (json.timingAge !== undefined) {
      newInstance.timing = Age.parse(json.timingAge);
    }
    if (json.timingPeriod !== undefined) {
      newInstance.timing = Period.parse(json.timingPeriod);
    }
    if (json.timingDuration !== undefined) {
      newInstance.timing = Duration.parse(json.timingDuration);
    }
    if (json.timingRange !== undefined) {
      newInstance.timing = Range.parse(json.timingRange);
    }
    if (json.timingTiming !== undefined) {
      newInstance.timing = Timing.parse(json.timingTiming);
    }
    if (json.participant !== undefined) {
      newInstance.participant = json.participant.map((x) => Reference.parse(x));
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.groupingBehavior !== undefined) {
      newInstance.groupingBehavior = ActionGroupingBehavior.parsePrimitive(json.groupingBehavior, json._groupingBehavior);
    }
    if (json.selectionBehavior !== undefined) {
      newInstance.selectionBehavior = ActionSelectionBehavior.parsePrimitive(json.selectionBehavior, json._selectionBehavior);
    }
    if (json.requiredBehavior !== undefined) {
      newInstance.requiredBehavior = ActionRequiredBehavior.parsePrimitive(json.requiredBehavior, json._requiredBehavior);
    }
    if (json.precheckBehavior !== undefined) {
      newInstance.precheckBehavior = ActionPrecheckBehavior.parsePrimitive(json.precheckBehavior, json._precheckBehavior);
    }
    if (json.cardinalityBehavior !== undefined) {
      newInstance.cardinalityBehavior = ActionCardinalityBehavior.parsePrimitive(json.cardinalityBehavior, json._cardinalityBehavior);
    }
    if (json.resource !== undefined) {
      newInstance.resource = Reference.parse(json.resource);
    }
    if (json.action !== undefined) {
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

  public clone(): RequestGroupAction {
    return RequestGroupAction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "RequestGroupAction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
