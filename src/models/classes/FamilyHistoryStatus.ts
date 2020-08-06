/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class FamilyHistoryStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "FamilyHistoryStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: FamilyHistoryStatus = new FamilyHistoryStatus()
  ): FamilyHistoryStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isFamilyHistoryStatus(input?: unknown): input is FamilyHistoryStatus {
    const castInput = input as FamilyHistoryStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "FamilyHistoryStatus";
  }
  
  public getTypeName(): string {
    return "FamilyHistoryStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
