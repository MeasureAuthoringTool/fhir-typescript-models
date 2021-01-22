/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("AccountStatus", "PrimitiveCode")
export class AccountStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AccountStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: AccountStatus = new AccountStatus()
  ): AccountStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isAccountStatus(input?: unknown): input is AccountStatus {
    const castInput = input as AccountStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AccountStatus";
  }

  public clone(): AccountStatus {
    const result = new AccountStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "AccountStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
