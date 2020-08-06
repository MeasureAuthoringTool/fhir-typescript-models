/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class CodeSystemHierarchyMeaning extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CodeSystemHierarchyMeaning";

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
  
  public getTypeName(): string {
    return "CodeSystemHierarchyMeaning";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
