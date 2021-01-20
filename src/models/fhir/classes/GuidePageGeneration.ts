/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("GuidePageGeneration", "PrimitiveCode")
export class GuidePageGeneration extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "GuidePageGeneration";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: GuidePageGeneration = new GuidePageGeneration()
  ): GuidePageGeneration {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isGuidePageGeneration(input?: unknown): input is GuidePageGeneration {
    const castInput = input as GuidePageGeneration;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "GuidePageGeneration";
  }

  public clone(): GuidePageGeneration {
    const result = new GuidePageGeneration();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "GuidePageGeneration";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
