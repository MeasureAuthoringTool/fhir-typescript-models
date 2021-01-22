/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  IStructureMapGroupRuleTarget,
  PrimitiveId,
  PrimitiveString,
  StructureMapContextType,
  StructureMapGroupRuleTargetParameter,
  StructureMapTargetListMode,
  StructureMapTransform,
  FhirType
} from "../internal";

@FhirType("StructureMapGroupRuleTarget", "BackboneElement")
export class StructureMapGroupRuleTarget extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMap.Group.Rule.Target";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveId")
  public context?: PrimitiveId;

  @FhirField("StructureMapContextType")
  public contextType?: StructureMapContextType;

  @FhirField("PrimitiveString")
  public element?: PrimitiveString;

  @FhirField("PrimitiveId")
  public variable?: PrimitiveId;

  @FhirList("StructureMapTargetListMode")
  public listMode?: Array<StructureMapTargetListMode>;

  @FhirField("PrimitiveId")
  public listRuleId?: PrimitiveId;

  @FhirField("StructureMapTransform")
  public transform?: StructureMapTransform;

  @FhirList("StructureMapGroupRuleTargetParameter")
  public parameter?: Array<StructureMapGroupRuleTargetParameter>;

  public static parse(
    json: IStructureMapGroupRuleTarget,
    providedInstance: StructureMapGroupRuleTarget = new StructureMapGroupRuleTarget()
  ): StructureMapGroupRuleTarget {
    const newInstance: StructureMapGroupRuleTarget = BackboneElement.parse(json, providedInstance);
  
    if (json.context !== undefined) {
      newInstance.context = PrimitiveId.parsePrimitive(json.context, json._context);
    }
    if (json.contextType !== undefined) {
      newInstance.contextType = StructureMapContextType.parsePrimitive(json.contextType, json._contextType);
    }
    if (json.element !== undefined) {
      newInstance.element = PrimitiveString.parsePrimitive(json.element, json._element);
    }
    if (json.variable !== undefined) {
      newInstance.variable = PrimitiveId.parsePrimitive(json.variable, json._variable);
    }
    if (json.listMode !== undefined) {
      newInstance.listMode = json.listMode.map((x, i) => StructureMapTargetListMode.parsePrimitive(x, json._listMode?.[i]));
    }
    if (json.listRuleId !== undefined) {
      newInstance.listRuleId = PrimitiveId.parsePrimitive(json.listRuleId, json._listRuleId);
    }
    if (json.transform !== undefined) {
      newInstance.transform = StructureMapTransform.parsePrimitive(json.transform, json._transform);
    }
    if (json.parameter !== undefined) {
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

  public clone(): StructureMapGroupRuleTarget {
    return StructureMapGroupRuleTarget.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "StructureMapGroupRuleTarget";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
