/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  IStructureMapGroupRule,
  PrimitiveId,
  PrimitiveString,
  StructureMapGroupRuleDependent,
  StructureMapGroupRuleSource,
  StructureMapGroupRuleTarget,
  FhirType
} from "../internal";

@FhirType("StructureMapGroupRule", "BackboneElement")
export class StructureMapGroupRule extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMap.Group.Rule";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveId")
  public name?: PrimitiveId;

  @FhirList("StructureMapGroupRuleSource")
  public source?: Array<StructureMapGroupRuleSource>;

  @FhirList("StructureMapGroupRuleTarget")
  public target?: Array<StructureMapGroupRuleTarget>;

  @FhirList("StructureMapGroupRule")
  public rule?: Array<StructureMapGroupRule>;

  @FhirList("StructureMapGroupRuleDependent")
  public dependent?: Array<StructureMapGroupRuleDependent>;

  @FhirField("PrimitiveString")
  public documentation?: PrimitiveString;

  public static parse(
    json: IStructureMapGroupRule,
    providedInstance: StructureMapGroupRule = new StructureMapGroupRule()
  ): StructureMapGroupRule {
    const newInstance: StructureMapGroupRule = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveId.parsePrimitive(json.name, json._name);
    }
    if (json.source !== undefined) {
      newInstance.source = json.source.map((x) => StructureMapGroupRuleSource.parse(x));
    }
    if (json.target !== undefined) {
      newInstance.target = json.target.map((x) => StructureMapGroupRuleTarget.parse(x));
    }
    if (json.rule !== undefined) {
      newInstance.rule = json.rule.map((x) => StructureMapGroupRule.parse(x));
    }
    if (json.dependent !== undefined) {
      newInstance.dependent = json.dependent.map((x) => StructureMapGroupRuleDependent.parse(x));
    }
    if (json.documentation !== undefined) {
      newInstance.documentation = PrimitiveString.parsePrimitive(json.documentation, json._documentation);
    }
    return newInstance;
  }

  public static isStructureMapGroupRule(input?: unknown): input is StructureMapGroupRule {
    const castInput = input as StructureMapGroupRule;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapGroupRule";
  }

  public toJSON(): IStructureMapGroupRule {
    const result: IStructureMapGroupRule = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.source) {
      result.source = this.source.map((x) => x.toJSON());
    }

    if (this.target) {
      result.target = this.target.map((x) => x.toJSON());
    }

    if (this.rule) {
      result.rule = this.rule.map((x) => x.toJSON());
    }

    if (this.dependent) {
      result.dependent = this.dependent.map((x) => x.toJSON());
    }

    if (this.documentation) {
      result.documentation = this.documentation.value;
      result._documentation = Extension.serializePrimitiveExtension(this.documentation);
    }

    return result;
  }

  public clone(): StructureMapGroupRule {
    return StructureMapGroupRule.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "StructureMapGroupRule";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
