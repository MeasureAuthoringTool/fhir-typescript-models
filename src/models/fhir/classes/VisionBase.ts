/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("VisionBase", "PrimitiveCode")
export class VisionBase extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "VisionBase";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: VisionBase = new VisionBase()
  ): VisionBase {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isVisionBase(input?: unknown): input is VisionBase {
    const castInput = input as VisionBase;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "VisionBase";
  }

  public clone(): VisionBase {
    const result = new VisionBase();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "VisionBase";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
