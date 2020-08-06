/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IMessageHeaderDestination,
  PrimitiveString,
  PrimitiveUrl,
  Reference,
} from "../internal";

export class MessageHeaderDestination extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MessageHeader.Destination";

  public name?: PrimitiveString;

  public target?: Reference;

  public endpoint?: PrimitiveUrl;

  public receiver?: Reference;

  public static parse(
    json: IMessageHeaderDestination,
    providedInstance: MessageHeaderDestination = new MessageHeaderDestination()
  ): MessageHeaderDestination {
    const newInstance: MessageHeaderDestination = BackboneElement.parse(json, providedInstance);
  
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.target) {
      newInstance.target = Reference.parse(json.target);
    }
    if (json.endpoint) {
      newInstance.endpoint = PrimitiveUrl.parsePrimitive(json.endpoint, json._endpoint);
    }
    if (json.receiver) {
      newInstance.receiver = Reference.parse(json.receiver);
    }
    return newInstance;
  }

  public static isMessageHeaderDestination(input?: unknown): input is MessageHeaderDestination {
    const castInput = input as MessageHeaderDestination;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MessageHeaderDestination";
  }

  public toJSON(): IMessageHeaderDestination {
    const result: IMessageHeaderDestination = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.target) {
      result.target = this.target.toJSON();
    }

    if (this.endpoint) {
      result.endpoint = this.endpoint.value;
      result._endpoint = Extension.serializePrimitiveExtension(this.endpoint);
    }

    if (this.receiver) {
      result.receiver = this.receiver.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MessageHeaderDestination";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
