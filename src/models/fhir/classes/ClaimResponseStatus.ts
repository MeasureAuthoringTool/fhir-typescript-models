/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ClaimResponseStatus", "PrimitiveCode")
export class ClaimResponseStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimResponseStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ClaimResponseStatus = new ClaimResponseStatus()
  ): ClaimResponseStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isClaimResponseStatus(input?: unknown): input is ClaimResponseStatus {
    const castInput = input as ClaimResponseStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimResponseStatus";
  }

  public clone(): ClaimResponseStatus {
    const result = new ClaimResponseStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ClaimResponseStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
