/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("IssueType", "PrimitiveCode")
export class IssueType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "IssueType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: IssueType = new IssueType()
  ): IssueType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isIssueType(input?: unknown): input is IssueType {
    const castInput = input as IssueType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "IssueType";
  }

  public clone(): IssueType {
    const result = new IssueType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "IssueType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
