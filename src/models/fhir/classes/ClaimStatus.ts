/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ClaimStatus", "PrimitiveCode")
export class ClaimStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ClaimStatus = new ClaimStatus()
  ): ClaimStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isClaimStatus(input?: unknown): input is ClaimStatus {
    const castInput = input as ClaimStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimStatus";
  }

  public clone(): ClaimStatus {
    const result = new ClaimStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ClaimStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
