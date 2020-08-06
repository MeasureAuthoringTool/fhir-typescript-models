/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class VisionStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "VisionStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: VisionStatus = new VisionStatus()
  ): VisionStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isVisionStatus(input?: unknown): input is VisionStatus {
    const castInput = input as VisionStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "VisionStatus";
  }
  
  public getTypeName(): string {
    return "VisionStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
