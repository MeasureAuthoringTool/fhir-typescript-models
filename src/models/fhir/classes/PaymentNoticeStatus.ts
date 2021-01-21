/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("PaymentNoticeStatus", "PrimitiveCode")
export class PaymentNoticeStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PaymentNoticeStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: PaymentNoticeStatus = new PaymentNoticeStatus()
  ): PaymentNoticeStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isPaymentNoticeStatus(input?: unknown): input is PaymentNoticeStatus {
    const castInput = input as PaymentNoticeStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PaymentNoticeStatus";
  }

  public clone(): PaymentNoticeStatus {
    const result = new PaymentNoticeStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PaymentNoticeStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
