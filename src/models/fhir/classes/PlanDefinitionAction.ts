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
  DataRequirement,
  Duration,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IPlanDefinitionAction,
  Period,
  PlanDefinitionActionCondition,
  PlanDefinitionActionDynamicValue,
  PlanDefinitionActionParticipant,
  PlanDefinitionActionRelatedAction,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveId,
  PrimitiveString,
  PrimitiveUri,
  Range,
  Reference,
  RelatedArtifact,
  RequestPriority,
  Timing,
  TriggerDefinition,
  FhirType
} from "../internal";

@FhirType("PlanDefinitionAction", "BackboneElement")
export class PlanDefinitionAction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PlanDefinition.Action";

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

  @FhirList("CodeableConcept")
  public reason?: Array<CodeableConcept>;

  @FhirList("RelatedArtifact")
  public documentation?: Array<RelatedArtifact>;

  @FhirList("PrimitiveId")
  public goalId?: Array<PrimitiveId>;

  @FhirChoice("CodeableConcept", "Reference")
  public subject?: CodeableConcept | Reference;

  @FhirList("TriggerDefinition")
  public trigger?: Array<TriggerDefinition>;

  @FhirList("PlanDefinitionActionCondition")
  public condition?: Array<PlanDefinitionActionCondition>;

  @FhirList("DataRequirement")
  public input?: Array<DataRequirement>;

  @FhirList("DataRequirement")
  public output?: Array<DataRequirement>;

  @FhirList("PlanDefinitionActionRelatedAction")
  public relatedAction?: Array<PlanDefinitionActionRelatedAction>;

  @FhirChoice("PrimitiveDateTime", "Age", "Period", "Duration", "Range", "Timing")
  public timing?: PrimitiveDateTime | Age | Period | Duration | Range | Timing;

  @FhirList("PlanDefinitionActionParticipant")
  public participant?: Array<PlanDefinitionActionParticipant>;

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

  @FhirChoice("PrimitiveCanonical", "PrimitiveUri")
  public definition?: PrimitiveCanonical | PrimitiveUri;

  @FhirField("PrimitiveCanonical")
  public transform?: PrimitiveCanonical;

  @FhirList("PlanDefinitionActionDynamicValue")
  public dynamicValue?: Array<PlanDefinitionActionDynamicValue>;

  @FhirList("PlanDefinitionAction")
  public action?: Array<PlanDefinitionAction>;

  public static parse(
    json: IPlanDefinitionAction,
    providedInstance: PlanDefinitionAction = new PlanDefinitionAction()
  ): PlanDefinitionAction {
    const newInstance: PlanDefinitionAction = BackboneElement.parse(json, providedInstance);
  
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
    if (json.reason !== undefined) {
      newInstance.reason = json.reason.map((x) => CodeableConcept.parse(x));
    }
    if (json.documentation !== undefined) {
      newInstance.documentation = json.documentation.map((x) => RelatedArtifact.parse(x));
    }
    if (json.goalId !== undefined) {
      newInstance.goalId = json.goalId.map((x, i) => PrimitiveId.parsePrimitive(x, json._goalId?.[i]));
    }
    if (json.subjectCodeableConcept !== undefined) {
      newInstance.subject = CodeableConcept.parse(json.subjectCodeableConcept);
    }
    if (json.subjectReference !== undefined) {
      newInstance.subject = Reference.parse(json.subjectReference);
    }
    if (json.trigger !== undefined) {
      newInstance.trigger = json.trigger.map((x) => TriggerDefinition.parse(x));
    }
    if (json.condition !== undefined) {
      newInstance.condition = json.condition.map((x) => PlanDefinitionActionCondition.parse(x));
    }
    if (json.input !== undefined) {
      newInstance.input = json.input.map((x) => DataRequirement.parse(x));
    }
    if (json.output !== undefined) {
      newInstance.output = json.output.map((x) => DataRequirement.parse(x));
    }
    if (json.relatedAction !== undefined) {
      newInstance.relatedAction = json.relatedAction.map((x) => PlanDefinitionActionRelatedAction.parse(x));
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
      newInstance.participant = json.participant.map((x) => PlanDefinitionActionParticipant.parse(x));
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
    if (json.definitionCanonical !== undefined) {
      newInstance.definition = PrimitiveCanonical.parsePrimitive(json.definitionCanonical, json._definitionCanonical);
    }
    if (json.definitionUri !== undefined) {
      newInstance.definition = PrimitiveUri.parsePrimitive(json.definitionUri, json._definitionUri);
    }
    if (json.transform !== undefined) {
      newInstance.transform = PrimitiveCanonical.parsePrimitive(json.transform, json._transform);
    }
    if (json.dynamicValue !== undefined) {
      newInstance.dynamicValue = json.dynamicValue.map((x) => PlanDefinitionActionDynamicValue.parse(x));
    }
    if (json.action !== undefined) {
      newInstance.action = json.action.map((x) => PlanDefinitionAction.parse(x));
    }
    return newInstance;
  }

  public static isPlanDefinitionAction(input?: unknown): input is PlanDefinitionAction {
    const castInput = input as PlanDefinitionAction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PlanDefinitionAction";
  }

  public toJSON(): IPlanDefinitionAction {
    const result: IPlanDefinitionAction = super.toJSON();

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

    if (this.reason) {
      result.reason = this.reason.map((x) => x.toJSON());
    }

    if (this.documentation) {
      result.documentation = this.documentation.map((x) => x.toJSON());
    }

    if (this.goalId) {
      result.goalId = this.goalId.filter(x => !!x).map(x => x.value) as typeof result.goalId;
      result._goalId = Extension.serializePrimitiveExtensionArray(this.goalId);
    }

    if (this.subject && CodeableConcept.isCodeableConcept(this.subject)) {
      result.subjectCodeableConcept = this.subject.toJSON();
    }

    if (this.subject && Reference.isReference(this.subject)) {
      result.subjectReference = this.subject.toJSON();
    }

    if (this.trigger) {
      result.trigger = this.trigger.map((x) => x.toJSON());
    }

    if (this.condition) {
      result.condition = this.condition.map((x) => x.toJSON());
    }

    if (this.input) {
      result.input = this.input.map((x) => x.toJSON());
    }

    if (this.output) {
      result.output = this.output.map((x) => x.toJSON());
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

    if (this.definition && PrimitiveCanonical.isPrimitiveCanonical(this.definition)) {
      result.definitionCanonical = this.definition.value;
      result._definitionCanonical = Extension.serializePrimitiveExtension(this.definition);
    }

    if (this.definition && PrimitiveUri.isPrimitiveUri(this.definition)) {
      result.definitionUri = this.definition.value;
      result._definitionUri = Extension.serializePrimitiveExtension(this.definition);
    }

    if (this.transform) {
      result.transform = this.transform.value;
      result._transform = Extension.serializePrimitiveExtension(this.transform);
    }

    if (this.dynamicValue) {
      result.dynamicValue = this.dynamicValue.map((x) => x.toJSON());
    }

    if (this.action) {
      result.action = this.action.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): PlanDefinitionAction {
    return PlanDefinitionAction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "PlanDefinitionAction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
