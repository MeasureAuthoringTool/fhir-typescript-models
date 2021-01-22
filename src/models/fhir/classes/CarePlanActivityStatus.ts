/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("CarePlanActivityStatus", "PrimitiveCode")
export class CarePlanActivityStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CarePlanActivityStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CarePlanActivityStatus = new CarePlanActivityStatus()
  ): CarePlanActivityStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCarePlanActivityStatus(input?: unknown): input is CarePlanActivityStatus {
    const castInput = input as CarePlanActivityStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CarePlanActivityStatus";
  }

  public clone(): CarePlanActivityStatus {
    const result = new CarePlanActivityStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "CarePlanActivityStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
