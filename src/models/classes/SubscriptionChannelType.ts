/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class SubscriptionChannelType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubscriptionChannelType";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SubscriptionChannelType = new SubscriptionChannelType()
  ): SubscriptionChannelType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSubscriptionChannelType(input?: unknown): input is SubscriptionChannelType {
    const castInput = input as SubscriptionChannelType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubscriptionChannelType";
  }
  
  public getTypeName(): string {
    return "SubscriptionChannelType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
