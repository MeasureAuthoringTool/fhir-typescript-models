/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("QuestionnaireItemType", "PrimitiveCode")
export class QuestionnaireItemType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "QuestionnaireItemType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: QuestionnaireItemType = new QuestionnaireItemType()
  ): QuestionnaireItemType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isQuestionnaireItemType(input?: unknown): input is QuestionnaireItemType {
    const castInput = input as QuestionnaireItemType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "QuestionnaireItemType";
  }

  public clone(): QuestionnaireItemType {
    const result = new QuestionnaireItemType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "QuestionnaireItemType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
