/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ExtensionContextType", "PrimitiveCode")
export class ExtensionContextType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExtensionContextType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ExtensionContextType = new ExtensionContextType()
  ): ExtensionContextType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isExtensionContextType(input?: unknown): input is ExtensionContextType {
    const castInput = input as ExtensionContextType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExtensionContextType";
  }

  public clone(): ExtensionContextType {
    const result = new ExtensionContextType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ExtensionContextType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
