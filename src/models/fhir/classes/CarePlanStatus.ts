/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("CarePlanStatus", "PrimitiveCode")
export class CarePlanStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CarePlanStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CarePlanStatus = new CarePlanStatus()
  ): CarePlanStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCarePlanStatus(input?: unknown): input is CarePlanStatus {
    const castInput = input as CarePlanStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CarePlanStatus";
  }

  public clone(): CarePlanStatus {
    const result = new CarePlanStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "CarePlanStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
