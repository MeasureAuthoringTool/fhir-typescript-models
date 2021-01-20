/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("MimeType", "PrimitiveCode")
export class MimeType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MimeType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: MimeType = new MimeType()
  ): MimeType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isMimeType(input?: unknown): input is MimeType {
    const castInput = input as MimeType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MimeType";
  }

  public clone(): MimeType {
    const result = new MimeType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "MimeType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
