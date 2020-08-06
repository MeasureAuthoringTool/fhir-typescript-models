/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  ActionRelationshipType,
  BackboneElement,
  Duration,
  Extension,
  IPlanDefinitionActionRelatedAction,
  PrimitiveId,
  Range,
} from "../internal";

export class PlanDefinitionActionRelatedAction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PlanDefinition.Action.RelatedAction";

  public actionId?: PrimitiveId;

  public relationship?: ActionRelationshipType;

  public offset?: Duration | Range;

  public static parse(
    json: IPlanDefinitionActionRelatedAction,
    providedInstance: PlanDefinitionActionRelatedAction = new PlanDefinitionActionRelatedAction()
  ): PlanDefinitionActionRelatedAction {
    const newInstance: PlanDefinitionActionRelatedAction = BackboneElement.parse(json, providedInstance);
  
    if (json.actionId) {
      newInstance.actionId = PrimitiveId.parsePrimitive(json.actionId, json._actionId);
    }
    if (json.relationship) {
      newInstance.relationship = ActionRelationshipType.parsePrimitive(json.relationship, json._relationship);
    }
    if (json.offsetDuration) {
      newInstance.offset = Duration.parse(json.offsetDuration);
    }
    if (json.offsetRange) {
      newInstance.offset = Range.parse(json.offsetRange);
    }
    return newInstance;
  }

  public static isPlanDefinitionActionRelatedAction(input?: unknown): input is PlanDefinitionActionRelatedAction {
    const castInput = input as PlanDefinitionActionRelatedAction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PlanDefinitionActionRelatedAction";
  }

  public toJSON(): IPlanDefinitionActionRelatedAction {
    const result: IPlanDefinitionActionRelatedAction = super.toJSON();

    if (this.actionId) {
      result.actionId = this.actionId.value;
      result._actionId = Extension.serializePrimitiveExtension(this.actionId);
    }

    if (this.relationship) {
      result.relationship = this.relationship.value;
      result._relationship = Extension.serializePrimitiveExtension(this.relationship);
    }

    if (this.offset && Duration.isDuration(this.offset)) {
      result.offsetDuration = this.offset.toJSON();
    }

    if (this.offset && Range.isRange(this.offset)) {
      result.offsetRange = this.offset.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "PlanDefinitionActionRelatedAction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
