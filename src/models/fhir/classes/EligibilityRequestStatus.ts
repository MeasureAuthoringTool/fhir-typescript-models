/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("EligibilityRequestStatus", "PrimitiveCode")
export class EligibilityRequestStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EligibilityRequestStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EligibilityRequestStatus = new EligibilityRequestStatus()
  ): EligibilityRequestStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEligibilityRequestStatus(input?: unknown): input is EligibilityRequestStatus {
    const castInput = input as EligibilityRequestStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EligibilityRequestStatus";
  }

  public clone(): EligibilityRequestStatus {
    const result = new EligibilityRequestStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "EligibilityRequestStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
