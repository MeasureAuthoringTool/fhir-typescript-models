/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class UDIEntryType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "UDIEntryType";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: UDIEntryType = new UDIEntryType()
  ): UDIEntryType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isUDIEntryType(input?: unknown): input is UDIEntryType {
    const castInput = input as UDIEntryType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "UDIEntryType";
  }
  
  public getTypeName(): string {
    return "UDIEntryType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
