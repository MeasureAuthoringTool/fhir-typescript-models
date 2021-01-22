/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("QuestionnaireItemOperator", "PrimitiveCode")
export class QuestionnaireItemOperator extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "QuestionnaireItemOperator";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: QuestionnaireItemOperator = new QuestionnaireItemOperator()
  ): QuestionnaireItemOperator {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isQuestionnaireItemOperator(input?: unknown): input is QuestionnaireItemOperator {
    const castInput = input as QuestionnaireItemOperator;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "QuestionnaireItemOperator";
  }

  public clone(): QuestionnaireItemOperator {
    const result = new QuestionnaireItemOperator();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "QuestionnaireItemOperator";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
