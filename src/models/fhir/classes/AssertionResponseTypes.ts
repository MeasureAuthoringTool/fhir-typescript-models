/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class AssertionResponseTypes extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AssertionResponseTypes";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: AssertionResponseTypes = new AssertionResponseTypes()
  ): AssertionResponseTypes {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isAssertionResponseTypes(input?: unknown): input is AssertionResponseTypes {
    const castInput = input as AssertionResponseTypes;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AssertionResponseTypes";
  }
  
  public getTypeName(): string {
    return "AssertionResponseTypes";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
