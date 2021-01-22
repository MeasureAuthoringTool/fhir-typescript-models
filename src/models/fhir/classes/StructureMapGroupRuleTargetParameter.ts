/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirChoice,
  IStructureMapGroupRuleTargetParameter,
  PrimitiveBoolean,
  PrimitiveDecimal,
  PrimitiveId,
  PrimitiveInteger,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("StructureMapGroupRuleTargetParameter", "BackboneElement")
export class StructureMapGroupRuleTargetParameter extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMap.Group.Rule.Target.Parameter";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("PrimitiveId", "PrimitiveString", "PrimitiveBoolean", "PrimitiveInteger", "PrimitiveDecimal")
  public value?: PrimitiveId | PrimitiveString | PrimitiveBoolean | PrimitiveInteger | PrimitiveDecimal;

  public static parse(
    json: IStructureMapGroupRuleTargetParameter,
    providedInstance: StructureMapGroupRuleTargetParameter = new StructureMapGroupRuleTargetParameter()
  ): StructureMapGroupRuleTargetParameter {
    const newInstance: StructureMapGroupRuleTargetParameter = BackboneElement.parse(json, providedInstance);
  
    if (json.valueId !== undefined) {
      newInstance.value = PrimitiveId.parsePrimitive(json.valueId, json._valueId);
    }
    if (json.valueString !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.valueString, json._valueString);
    }
    if (json.valueBoolean !== undefined) {
      newInstance.value = PrimitiveBoolean.parsePrimitive(json.valueBoolean, json._valueBoolean);
    }
    if (json.valueInteger !== undefined) {
      newInstance.value = PrimitiveInteger.parsePrimitive(json.valueInteger, json._valueInteger);
    }
    if (json.valueDecimal !== undefined) {
      newInstance.value = PrimitiveDecimal.parsePrimitive(json.valueDecimal, json._valueDecimal);
    }
    return newInstance;
  }

  public static isStructureMapGroupRuleTargetParameter(input?: unknown): input is StructureMapGroupRuleTargetParameter {
    const castInput = input as StructureMapGroupRuleTargetParameter;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapGroupRuleTargetParameter";
  }

  public toJSON(): IStructureMapGroupRuleTargetParameter {
    const result: IStructureMapGroupRuleTargetParameter = super.toJSON();

    if (this.value && PrimitiveId.isPrimitiveId(this.value)) {
      result.valueId = this.value.value;
      result._valueId = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveString.isPrimitiveString(this.value)) {
      result.valueString = this.value.value;
      result._valueString = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveBoolean.isPrimitiveBoolean(this.value)) {
      result.valueBoolean = this.value.value;
      result._valueBoolean = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveInteger.isPrimitiveInteger(this.value)) {
      result.valueInteger = this.value.value;
      result._valueInteger = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveDecimal.isPrimitiveDecimal(this.value)) {
      result.valueDecimal = this.value.value;
      result._valueDecimal = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }

  public clone(): StructureMapGroupRuleTargetParameter {
    return StructureMapGroupRuleTargetParameter.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "StructureMapGroupRuleTargetParameter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
