/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class FHIRSubstanceStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "FHIRSubstanceStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: FHIRSubstanceStatus = new FHIRSubstanceStatus()
  ): FHIRSubstanceStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isFHIRSubstanceStatus(input?: unknown): input is FHIRSubstanceStatus {
    const castInput = input as FHIRSubstanceStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "FHIRSubstanceStatus";
  }
  
  public getTypeName(): string {
    return "FHIRSubstanceStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
