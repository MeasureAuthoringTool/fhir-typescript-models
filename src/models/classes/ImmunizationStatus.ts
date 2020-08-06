/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ImmunizationStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImmunizationStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ImmunizationStatus = new ImmunizationStatus()
  ): ImmunizationStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isImmunizationStatus(input?: unknown): input is ImmunizationStatus {
    const castInput = input as ImmunizationStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImmunizationStatus";
  }
  
  public getTypeName(): string {
    return "ImmunizationStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
