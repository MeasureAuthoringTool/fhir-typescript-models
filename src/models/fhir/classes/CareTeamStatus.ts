/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class CareTeamStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CareTeamStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CareTeamStatus = new CareTeamStatus()
  ): CareTeamStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCareTeamStatus(input?: unknown): input is CareTeamStatus {
    const castInput = input as CareTeamStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CareTeamStatus";
  }

  public clone(): CareTeamStatus {
    const result = new CareTeamStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "CareTeamStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
