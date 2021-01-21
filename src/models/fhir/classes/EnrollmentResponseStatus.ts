/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("EnrollmentResponseStatus", "PrimitiveCode")
export class EnrollmentResponseStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EnrollmentResponseStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EnrollmentResponseStatus = new EnrollmentResponseStatus()
  ): EnrollmentResponseStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEnrollmentResponseStatus(input?: unknown): input is EnrollmentResponseStatus {
    const castInput = input as EnrollmentResponseStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EnrollmentResponseStatus";
  }

  public clone(): EnrollmentResponseStatus {
    const result = new EnrollmentResponseStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "EnrollmentResponseStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
