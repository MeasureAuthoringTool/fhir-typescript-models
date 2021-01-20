/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("CarePlanIntent", "PrimitiveCode")
export class CarePlanIntent extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CarePlanIntent";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CarePlanIntent = new CarePlanIntent()
  ): CarePlanIntent {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCarePlanIntent(input?: unknown): input is CarePlanIntent {
    const castInput = input as CarePlanIntent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CarePlanIntent";
  }

  public clone(): CarePlanIntent {
    const result = new CarePlanIntent();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "CarePlanIntent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
