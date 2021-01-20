/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("InvoicePriceComponentType", "PrimitiveCode")
export class InvoicePriceComponentType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "InvoicePriceComponentType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: InvoicePriceComponentType = new InvoicePriceComponentType()
  ): InvoicePriceComponentType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isInvoicePriceComponentType(input?: unknown): input is InvoicePriceComponentType {
    const castInput = input as InvoicePriceComponentType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "InvoicePriceComponentType";
  }

  public clone(): InvoicePriceComponentType {
    const result = new InvoicePriceComponentType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "InvoicePriceComponentType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
