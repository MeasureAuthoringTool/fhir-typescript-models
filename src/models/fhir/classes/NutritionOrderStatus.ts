/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("NutritionOrderStatus", "PrimitiveCode")
export class NutritionOrderStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NutritionOrderStatus";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): NutritionOrderStatus {
    const result = new NutritionOrderStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "NutritionOrderStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
