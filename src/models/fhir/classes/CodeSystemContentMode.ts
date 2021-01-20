/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("CodeSystemContentMode", "PrimitiveCode")
export class CodeSystemContentMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CodeSystemContentMode";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CodeSystemContentMode = new CodeSystemContentMode()
  ): CodeSystemContentMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCodeSystemContentMode(input?: unknown): input is CodeSystemContentMode {
    const castInput = input as CodeSystemContentMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CodeSystemContentMode";
  }

  public clone(): CodeSystemContentMode {
    const result = new CodeSystemContentMode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "CodeSystemContentMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
