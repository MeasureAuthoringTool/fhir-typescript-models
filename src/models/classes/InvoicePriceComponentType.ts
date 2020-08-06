/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class InvoicePriceComponentType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "InvoicePriceComponentType";

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
  
  public getTypeName(): string {
    return "InvoicePriceComponentType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
