/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("PaymentReconciliationStatus", "PrimitiveCode")
export class PaymentReconciliationStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PaymentReconciliationStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: PaymentReconciliationStatus = new PaymentReconciliationStatus()
  ): PaymentReconciliationStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isPaymentReconciliationStatus(input?: unknown): input is PaymentReconciliationStatus {
    const castInput = input as PaymentReconciliationStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PaymentReconciliationStatus";
  }

  public clone(): PaymentReconciliationStatus {
    const result = new PaymentReconciliationStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PaymentReconciliationStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
