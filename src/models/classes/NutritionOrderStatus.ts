/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class NutritionOrderStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NutritionOrderStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: NutritionOrderStatus = new NutritionOrderStatus()
  ): NutritionOrderStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isNutritionOrderStatus(input?: unknown): input is NutritionOrderStatus {
    const castInput = input as NutritionOrderStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "NutritionOrderStatus";
  }
  
  public getTypeName(): string {
    return "NutritionOrderStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
