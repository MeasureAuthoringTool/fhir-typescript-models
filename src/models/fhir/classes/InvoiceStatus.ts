/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("InvoiceStatus", "PrimitiveCode")
export class InvoiceStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "InvoiceStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: InvoiceStatus = new InvoiceStatus()
  ): InvoiceStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isInvoiceStatus(input?: unknown): input is InvoiceStatus {
    const castInput = input as InvoiceStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "InvoiceStatus";
  }

  public clone(): InvoiceStatus {
    const result = new InvoiceStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "InvoiceStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
