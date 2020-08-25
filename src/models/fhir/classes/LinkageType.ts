/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class LinkageType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "LinkageType";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: LinkageType = new LinkageType()
  ): LinkageType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isLinkageType(input?: unknown): input is LinkageType {
    const castInput = input as LinkageType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "LinkageType";
  }
  
  public getTypeName(): string {
    return "LinkageType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
