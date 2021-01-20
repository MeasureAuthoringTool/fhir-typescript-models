/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("LinkageType", "PrimitiveCode")
export class LinkageType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "LinkageType";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): LinkageType {
    const result = new LinkageType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "LinkageType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
