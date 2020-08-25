/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ContractStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ContractStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ContractStatus = new ContractStatus()
  ): ContractStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isContractStatus(input?: unknown): input is ContractStatus {
    const castInput = input as ContractStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractStatus";
  }
  
  public getTypeName(): string {
    return "ContractStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
