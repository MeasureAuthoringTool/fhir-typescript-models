/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("SubscriptionStatus", "PrimitiveCode")
export class SubscriptionStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubscriptionStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SubscriptionStatus = new SubscriptionStatus()
  ): SubscriptionStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSubscriptionStatus(input?: unknown): input is SubscriptionStatus {
    const castInput = input as SubscriptionStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubscriptionStatus";
  }

  public clone(): SubscriptionStatus {
    const result = new SubscriptionStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "SubscriptionStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
