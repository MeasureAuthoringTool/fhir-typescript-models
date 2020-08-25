/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IStructureMapGroupRuleTarget,
  PrimitiveId,
  PrimitiveString,
  StructureMapContextType,
  StructureMapGroupRuleTargetParameter,
  StructureMapTargetListMode,
  StructureMapTransform,
} from "../internal";

export class StructureMapGroupRuleTarget extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMap.Group.Rule.Target";

  public context?: PrimitiveId;

  public contextType?: StructureMapContextType;

  public element?: PrimitiveString;

  public variable?: PrimitiveId;

  public listMode?: Array<StructureMapTargetListMode>;

  public listRuleId?: PrimitiveId;

  public transform?: StructureMapTransform;

  public parameter?: Array<StructureMapGroupRuleTargetParameter>;

  public static parse(
    json: IStructureMapGroupRuleTarget,
    providedInstance: StructureMapGroupRuleTarget = new StructureMapGroupRuleTarget()
  ): StructureMapGroupRuleTarget {
    const newInstance: StructureMapGroupRuleTarget = BackboneElement.parse(json, providedInstance);
  
    if (json.context) {
      newInstance.context = PrimitiveId.parsePrimitive(json.context, json._context);
    }
    if (json.contextType) {
      newInstance.contextType = StructureMapContextType.parsePrimitive(json.contextType, json._contextType);
    }
    if (json.element) {
      newInstance.element = PrimitiveString.parsePrimitive(json.element, json._element);
    }
    if (json.variable) {
      newInstance.variable = PrimitiveId.parsePrimitive(json.variable, json._variable);
    }
    if (json.listMode) {
      newInstance.listMode = json.listMode.map((x, i) => {
        const ext = json._listMode && json._listMode[i];
        return StructureMapTargetListMode.parsePrimitive(x, ext);
      });
    }
    if (json.listRuleId) {
      newInstance.listRuleId = PrimitiveId.parsePrimitive(json.listRuleId, json._listRuleId);
    }
    if (json.transform) {
      newInstance.transform = StructureMapTransform.parsePrimitive(json.transform, json._transform);
    }
    if (json.parameter) {
      newInstance.parameter = json.parameter.map((x) => StructureMapGroupRuleTargetParameter.parse(x));
    }
    return newInstance;
  }

  public static isStructureMapGroupRuleTarget(input?: unknown): input is StructureMapGroupRuleTarget {
    const castInput = input as StructureMapGroupRuleTarget;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapGroupRuleTarget";
  }

  public toJSON(): IStructureMapGroupRuleTarget {
    const result: IStructureMapGroupRuleTarget = super.toJSON();

    if (this.context) {
      result.context = this.context.value;
      result._context = Extension.serializePrimitiveExtension(this.context);
    }

    if (this.contextType) {
      result.contextType = this.contextType.value;
      result._contextType = Extension.serializePrimitiveExtension(this.contextType);
    }

    if (this.element) {
      result.element = this.element.value;
      result._element = Extension.serializePrimitiveExtension(this.element);
    }

    if (this.variable) {
      result.variable = this.variable.value;
      result._variable = Extension.serializePrimitiveExtension(this.variable);
    }

    if (this.listMode) {
      result.listMode = this.listMode.filter(x => !!x).map(x => x.value) as typeof result.listMode;
      result._listMode = Extension.serializePrimitiveExtensionArray(this.listMode);
    }

    if (this.listRuleId) {
      result.listRuleId = this.listRuleId.value;
      result._listRuleId = Extension.serializePrimitiveExtension(this.listRuleId);
    }

    if (this.transform) {
      result.transform = this.transform.value;
      result._transform = Extension.serializePrimitiveExtension(this.transform);
    }

    if (this.parameter) {
      result.parameter = this.parameter.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "StructureMapGroupRuleTarget";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
