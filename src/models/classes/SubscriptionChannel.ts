/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ISubscriptionChannel,
  MimeType,
  PrimitiveString,
  PrimitiveUrl,
  SubscriptionChannelType,
} from "../internal";

export class SubscriptionChannel extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Subscription.Channel";

  public type?: SubscriptionChannelType;

  public endpoint?: PrimitiveUrl;

  public payload?: MimeType;

  public header?: Array<PrimitiveString>;

  public static parse(
    json: ISubscriptionChannel,
    providedInstance: SubscriptionChannel = new SubscriptionChannel()
  ): SubscriptionChannel {
    const newInstance: SubscriptionChannel = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = SubscriptionChannelType.parsePrimitive(json.type, json._type);
    }
    if (json.endpoint) {
      newInstance.endpoint = PrimitiveUrl.parsePrimitive(json.endpoint, json._endpoint);
    }
    if (json.payload) {
      newInstance.payload = MimeType.parsePrimitive(json.payload, json._payload);
    }
    if (json.header) {
      newInstance.header = json.header.map((x, i) => {
        const ext = json._header && json._header[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    return newInstance;
  }

  public static isSubscriptionChannel(input?: unknown): input is SubscriptionChannel {
    const castInput = input as SubscriptionChannel;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubscriptionChannel";
  }

  public toJSON(): ISubscriptionChannel {
    const result: ISubscriptionChannel = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.endpoint) {
      result.endpoint = this.endpoint.value;
      result._endpoint = Extension.serializePrimitiveExtension(this.endpoint);
    }

    if (this.payload) {
      result.payload = this.payload.value;
      result._payload = Extension.serializePrimitiveExtension(this.payload);
    }

    if (this.header) {
      result.header = this.header.filter(x => !!x).map(x => x.value) as typeof result.header;
      result._header = Extension.serializePrimitiveExtensionArray(this.header);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "SubscriptionChannel";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
