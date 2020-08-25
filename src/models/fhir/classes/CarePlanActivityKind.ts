/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class CarePlanActivityKind extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CarePlanActivityKind";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CarePlanActivityKind = new CarePlanActivityKind()
  ): CarePlanActivityKind {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCarePlanActivityKind(input?: unknown): input is CarePlanActivityKind {
    const castInput = input as CarePlanActivityKind;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CarePlanActivityKind";
  }
  
  public getTypeName(): string {
    return "CarePlanActivityKind";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
