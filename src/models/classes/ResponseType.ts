/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ResponseType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ResponseType";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ResponseType = new ResponseType()
  ): ResponseType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isResponseType(input?: unknown): input is ResponseType {
    const castInput = input as ResponseType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ResponseType";
  }
  
  public getTypeName(): string {
    return "ResponseType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
