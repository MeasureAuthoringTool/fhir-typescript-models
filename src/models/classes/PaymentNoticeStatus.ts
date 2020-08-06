/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class PaymentNoticeStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PaymentNoticeStatus";

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
  
  public getTypeName(): string {
    return "PaymentNoticeStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
