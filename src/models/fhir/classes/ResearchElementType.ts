/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ResearchElementType", "PrimitiveCode")
export class ResearchElementType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ResearchElementType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ResearchElementType = new ResearchElementType()
  ): ResearchElementType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isResearchElementType(input?: unknown): input is ResearchElementType {
    const castInput = input as ResearchElementType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ResearchElementType";
  }

  public clone(): ResearchElementType {
    const result = new ResearchElementType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ResearchElementType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
