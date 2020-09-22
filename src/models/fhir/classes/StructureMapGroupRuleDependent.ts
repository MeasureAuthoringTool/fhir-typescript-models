/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IStructureMapGroupRuleDependent,
  PrimitiveId,
  PrimitiveString,
} from "../internal";

export class StructureMapGroupRuleDependent extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMap.Group.Rule.Dependent";
  
  static readonly primaryCodePath: string | null = null;

  public name?: PrimitiveId;

  public variable?: Array<PrimitiveString>;

  public static parse(
    json: IStructureMapGroupRuleDependent,
    providedInstance: StructureMapGroupRuleDependent = new StructureMapGroupRuleDependent()
  ): StructureMapGroupRuleDependent {
    const newInstance: StructureMapGroupRuleDependent = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveId.parsePrimitive(json.name, json._name);
    }
    if (json.variable !== undefined) {
      newInstance.variable = json.variable.map((x, i) => {
        const ext = json._variable && json._variable[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    return newInstance;
  }

  public static isStructureMapGroupRuleDependent(input?: unknown): input is StructureMapGroupRuleDependent {
    const castInput = input as StructureMapGroupRuleDependent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapGroupRuleDependent";
  }

  public toJSON(): IStructureMapGroupRuleDependent {
    const result: IStructureMapGroupRuleDependent = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.variable) {
      result.variable = this.variable.filter(x => !!x).map(x => x.value) as typeof result.variable;
      result._variable = Extension.serializePrimitiveExtensionArray(this.variable);
    }

    return result;
  }

  public clone(): StructureMapGroupRuleDependent {
    return StructureMapGroupRuleDependent.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "StructureMapGroupRuleDependent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
