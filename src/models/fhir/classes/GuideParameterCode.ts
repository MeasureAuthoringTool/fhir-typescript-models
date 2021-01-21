/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("GuideParameterCode", "PrimitiveCode")
export class GuideParameterCode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "GuideParameterCode";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: GuideParameterCode = new GuideParameterCode()
  ): GuideParameterCode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isGuideParameterCode(input?: unknown): input is GuideParameterCode {
    const castInput = input as GuideParameterCode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "GuideParameterCode";
  }

  public clone(): GuideParameterCode {
    const result = new GuideParameterCode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "GuideParameterCode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
