/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class AdverseEventActuality extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AdverseEventActuality";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: AdverseEventActuality = new AdverseEventActuality()
  ): AdverseEventActuality {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isAdverseEventActuality(input?: unknown): input is AdverseEventActuality {
    const castInput = input as AdverseEventActuality;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AdverseEventActuality";
  }
  
  public getTypeName(): string {
    return "AdverseEventActuality";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
