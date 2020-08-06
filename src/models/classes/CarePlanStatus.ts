/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class CarePlanStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CarePlanStatus";

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
  
  public getTypeName(): string {
    return "CarePlanStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
