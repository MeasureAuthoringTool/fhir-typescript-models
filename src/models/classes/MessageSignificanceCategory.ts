/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class MessageSignificanceCategory extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MessageSignificanceCategory";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: MessageSignificanceCategory = new MessageSignificanceCategory()
  ): MessageSignificanceCategory {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isMessageSignificanceCategory(input?: unknown): input is MessageSignificanceCategory {
    const castInput = input as MessageSignificanceCategory;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MessageSignificanceCategory";
  }
  
  public getTypeName(): string {
    return "MessageSignificanceCategory";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
