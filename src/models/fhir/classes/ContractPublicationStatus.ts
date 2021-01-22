/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ContractPublicationStatus", "PrimitiveCode")
export class ContractPublicationStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ContractPublicationStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ContractPublicationStatus = new ContractPublicationStatus()
  ): ContractPublicationStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isContractPublicationStatus(input?: unknown): input is ContractPublicationStatus {
    const castInput = input as ContractPublicationStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractPublicationStatus";
  }

  public clone(): ContractPublicationStatus {
    const result = new ContractPublicationStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ContractPublicationStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
