/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("VisionEyes", "PrimitiveCode")
export class VisionEyes extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "VisionEyes";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: VisionEyes = new VisionEyes()
  ): VisionEyes {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isVisionEyes(input?: unknown): input is VisionEyes {
    const castInput = input as VisionEyes;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "VisionEyes";
  }

  public clone(): VisionEyes {
    const result = new VisionEyes();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "VisionEyes";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
