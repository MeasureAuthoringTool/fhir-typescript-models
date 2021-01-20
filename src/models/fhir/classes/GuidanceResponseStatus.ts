/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("GuidanceResponseStatus", "PrimitiveCode")
export class GuidanceResponseStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "GuidanceResponseStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: GuidanceResponseStatus = new GuidanceResponseStatus()
  ): GuidanceResponseStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isGuidanceResponseStatus(input?: unknown): input is GuidanceResponseStatus {
    const castInput = input as GuidanceResponseStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "GuidanceResponseStatus";
  }

  public clone(): GuidanceResponseStatus {
    const result = new GuidanceResponseStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "GuidanceResponseStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
