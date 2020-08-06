/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IMessageHeaderResponse,
  PrimitiveId,
  Reference,
  ResponseType,
} from "../internal";

export class MessageHeaderResponse extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MessageHeader.Response";

  public identifier?: PrimitiveId;

  public code?: ResponseType;

  public details?: Reference;

  public static parse(
    json: IMessageHeaderResponse,
    providedInstance: MessageHeaderResponse = new MessageHeaderResponse()
  ): MessageHeaderResponse {
    const newInstance: MessageHeaderResponse = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = PrimitiveId.parsePrimitive(json.identifier, json._identifier);
    }
    if (json.code) {
      newInstance.code = ResponseType.parsePrimitive(json.code, json._code);
    }
    if (json.details) {
      newInstance.details = Reference.parse(json.details);
    }
    return newInstance;
  }

  public static isMessageHeaderResponse(input?: unknown): input is MessageHeaderResponse {
    const castInput = input as MessageHeaderResponse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MessageHeaderResponse";
  }

  public toJSON(): IMessageHeaderResponse {
    const result: IMessageHeaderResponse = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.value;
      result._identifier = Extension.serializePrimitiveExtension(this.identifier);
    }

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.details) {
      result.details = this.details.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MessageHeaderResponse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
