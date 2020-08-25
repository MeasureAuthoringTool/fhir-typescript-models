/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveString,
} from "../internal";

export class PrimitiveQuestion extends PrimitiveString {
  static readonly baseType: string = "FHIR.string";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "question";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveString.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveString.parsePrimitive>[1],
    providedInstance: PrimitiveQuestion = new PrimitiveQuestion()
  ): PrimitiveQuestion {
      return PrimitiveString.parsePrimitive(value, extension, providedInstance);
  }

  public static isPrimitiveQuestion(input?: unknown): input is PrimitiveQuestion {
    const castInput = input as PrimitiveQuestion;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitiveQuestion";
  }

  public clone(): PrimitiveQuestion {
    const result = new PrimitiveQuestion();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PrimitiveQuestion";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
