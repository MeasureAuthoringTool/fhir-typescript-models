/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("QuestionnaireResponseStatus", "PrimitiveCode")
export class QuestionnaireResponseStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "QuestionnaireResponseStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: QuestionnaireResponseStatus = new QuestionnaireResponseStatus()
  ): QuestionnaireResponseStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isQuestionnaireResponseStatus(input?: unknown): input is QuestionnaireResponseStatus {
    const castInput = input as QuestionnaireResponseStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "QuestionnaireResponseStatus";
  }

  public clone(): QuestionnaireResponseStatus {
    const result = new QuestionnaireResponseStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "QuestionnaireResponseStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
