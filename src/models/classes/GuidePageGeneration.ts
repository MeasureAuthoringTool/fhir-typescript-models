/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class GuidePageGeneration extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "GuidePageGeneration";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: GuidePageGeneration = new GuidePageGeneration()
  ): GuidePageGeneration {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isGuidePageGeneration(input?: unknown): input is GuidePageGeneration {
    const castInput = input as GuidePageGeneration;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "GuidePageGeneration";
  }
  
  public getTypeName(): string {
    return "GuidePageGeneration";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
