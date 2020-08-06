/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class LinkType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "LinkType";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: LinkType = new LinkType()
  ): LinkType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isLinkType(input?: unknown): input is LinkType {
    const castInput = input as LinkType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "LinkType";
  }
  
  public getTypeName(): string {
    return "LinkType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
