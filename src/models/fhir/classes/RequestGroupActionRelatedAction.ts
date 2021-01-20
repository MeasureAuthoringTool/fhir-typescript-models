/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  ActionRelationshipType,
  BackboneElement,
  Duration,
  Extension,
  FhirChoice,
  FhirField,
  IRequestGroupActionRelatedAction,
  PrimitiveId,
  Range,
  FhirType
} from "../internal";

@FhirType("RequestGroupActionRelatedAction", "BackboneElement")
export class RequestGroupActionRelatedAction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RequestGroup.Action.RelatedAction";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveId")
  public actionId?: PrimitiveId;

  @FhirField("ActionRelationshipType")
  public relationship?: ActionRelationshipType;

  @FhirChoice("Duration", "Range")
  public offset?: Duration | Range;

  public static parse(
    json: IRequestGroupActionRelatedAction,
    providedInstance: RequestGroupActionRelatedAction = new RequestGroupActionRelatedAction()
  ): RequestGroupActionRelatedAction {
    const newInstance: RequestGroupActionRelatedAction = BackboneElement.parse(json, providedInstance);
  
    if (json.actionId !== undefined) {
      newInstance.actionId = PrimitiveId.parsePrimitive(json.actionId, json._actionId);
    }
    if (json.relationship !== undefined) {
      newInstance.relationship = ActionRelationshipType.parsePrimitive(json.relationship, json._relationship);
    }
    if (json.offsetDuration !== undefined) {
      newInstance.offset = Duration.parse(json.offsetDuration);
    }
    if (json.offsetRange !== undefined) {
      newInstance.offset = Range.parse(json.offsetRange);
    }
    return newInstance;
  }

  public static isRequestGroupActionRelatedAction(input?: unknown): input is RequestGroupActionRelatedAction {
    const castInput = input as RequestGroupActionRelatedAction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RequestGroupActionRelatedAction";
  }

  public toJSON(): IRequestGroupActionRelatedAction {
    const result: IRequestGroupActionRelatedAction = super.toJSON();

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

  public clone(): RequestGroupActionRelatedAction {
    return RequestGroupActionRelatedAction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "RequestGroupActionRelatedAction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
