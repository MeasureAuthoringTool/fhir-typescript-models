/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IStructureMapGroupRule,
  PrimitiveId,
  PrimitiveString,
  StructureMapGroupRuleDependent,
  StructureMapGroupRuleSource,
  StructureMapGroupRuleTarget,
} from "../internal";

export class StructureMapGroupRule extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMap.Group.Rule";
  
  static readonly primaryCodePath: string | null = null;

  public name?: PrimitiveId;

  public source?: Array<StructureMapGroupRuleSource>;

  public target?: Array<StructureMapGroupRuleTarget>;

  public rule?: Array<StructureMapGroupRule>;

  public dependent?: Array<StructureMapGroupRuleDependent>;

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
