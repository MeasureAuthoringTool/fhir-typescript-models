/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("CodeSystemHierarchyMeaning", "PrimitiveCode")
export class CodeSystemHierarchyMeaning extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CodeSystemHierarchyMeaning";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CodeSystemHierarchyMeaning = new CodeSystemHierarchyMeaning()
  ): CodeSystemHierarchyMeaning {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCodeSystemHierarchyMeaning(input?: unknown): input is CodeSystemHierarchyMeaning {
    const castInput = input as CodeSystemHierarchyMeaning;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CodeSystemHierarchyMeaning";
  }

  public clone(): CodeSystemHierarchyMeaning {
    const result = new CodeSystemHierarchyMeaning();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "CodeSystemHierarchyMeaning";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
