/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("EnrollmentRequestStatus", "PrimitiveCode")
export class EnrollmentRequestStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EnrollmentRequestStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EnrollmentRequestStatus = new EnrollmentRequestStatus()
  ): EnrollmentRequestStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEnrollmentRequestStatus(input?: unknown): input is EnrollmentRequestStatus {
    const castInput = input as EnrollmentRequestStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EnrollmentRequestStatus";
  }

  public clone(): EnrollmentRequestStatus {
    const result = new EnrollmentRequestStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "EnrollmentRequestStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
