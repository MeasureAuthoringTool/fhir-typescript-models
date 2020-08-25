/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class QuestionnaireResponseStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "QuestionnaireResponseStatus";

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
  
  public getTypeName(): string {
    return "QuestionnaireResponseStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
