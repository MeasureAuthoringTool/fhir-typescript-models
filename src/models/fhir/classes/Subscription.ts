/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  ContactPoint,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  ISubscription,
  PrimitiveInstant,
  PrimitiveString,
  SubscriptionChannel,
  SubscriptionStatus,
  FhirType
} from "../internal";

@FhirType("Subscription", "DomainResource")
export class Subscription extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Subscription";

  static readonly primaryCodePath: string | null = null;

  @FhirField("SubscriptionStatus")
  public status?: SubscriptionStatus;

  @FhirList("ContactPoint")
  public contact?: Array<ContactPoint>;

  @FhirField("PrimitiveInstant")
  public end?: PrimitiveInstant;

  @FhirField("PrimitiveString")
  public reason?: PrimitiveString;

  @FhirField("PrimitiveString")
  public criteria?: PrimitiveString;

  @FhirField("PrimitiveString")
  public error?: PrimitiveString;

  @FhirField("SubscriptionChannel")
  public channel?: SubscriptionChannel;

  public static parse(
    json: ISubscription,
    providedInstance: Subscription = new Subscription()
  ): Subscription {
    const newInstance: Subscription = DomainResource.parse(json, providedInstance);
  
    if (json.status !== undefined) {
      newInstance.status = SubscriptionStatus.parsePrimitive(json.status, json._status);
    }
    if (json.contact !== undefined) {
      newInstance.contact = json.contact.map((x) => ContactPoint.parse(x));
    }
    if (json.end !== undefined) {
      newInstance.end = PrimitiveInstant.parsePrimitive(json.end, json._end);
    }
    if (json.reason !== undefined) {
      newInstance.reason = PrimitiveString.parsePrimitive(json.reason, json._reason);
    }
    if (json.criteria !== undefined) {
      newInstance.criteria = PrimitiveString.parsePrimitive(json.criteria, json._criteria);
    }
    if (json.error !== undefined) {
      newInstance.error = PrimitiveString.parsePrimitive(json.error, json._error);
    }
    if (json.channel !== undefined) {
      newInstance.channel = SubscriptionChannel.parse(json.channel);
    }
    return newInstance;
  }

  public static isSubscription(input?: unknown): input is Subscription {
    const castInput = input as Subscription;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Subscription";
  }

  public toJSON(): ISubscription {
    const result: ISubscription = super.toJSON();

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.contact) {
      result.contact = this.contact.map((x) => x.toJSON());
    }

    if (this.end) {
      result.end = this.end.value;
      result._end = Extension.serializePrimitiveExtension(this.end);
    }

    if (this.reason) {
      result.reason = this.reason.value;
      result._reason = Extension.serializePrimitiveExtension(this.reason);
    }

    if (this.criteria) {
      result.criteria = this.criteria.value;
      result._criteria = Extension.serializePrimitiveExtension(this.criteria);
    }

    if (this.error) {
      result.error = this.error.value;
      result._error = Extension.serializePrimitiveExtension(this.error);
    }

    if (this.channel) {
      result.channel = this.channel.toJSON();
    }

    return result;
  }

  public clone(): Subscription {
    return Subscription.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Subscription";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
