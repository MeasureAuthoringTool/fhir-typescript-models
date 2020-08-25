/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class XPathUsageType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "XPathUsageType";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: XPathUsageType = new XPathUsageType()
  ): XPathUsageType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isXPathUsageType(input?: unknown): input is XPathUsageType {
    const castInput = input as XPathUsageType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "XPathUsageType";
  }
  
  public getTypeName(): string {
    return "XPathUsageType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
