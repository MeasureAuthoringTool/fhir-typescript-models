/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IMessageDefinitionAllowedResponse,
  PrimitiveCanonical,
  PrimitiveMarkdown,
  FhirType
} from "../internal";

@FhirType("MessageDefinitionAllowedResponse", "BackboneElement")
export class MessageDefinitionAllowedResponse extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MessageDefinition.AllowedResponse";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveCanonical")
  public message?: PrimitiveCanonical;

  @FhirField("PrimitiveMarkdown")
  public situation?: PrimitiveMarkdown;

  public static parse(
    json: IMessageDefinitionAllowedResponse,
    providedInstance: MessageDefinitionAllowedResponse = new MessageDefinitionAllowedResponse()
  ): MessageDefinitionAllowedResponse {
    const newInstance: MessageDefinitionAllowedResponse = BackboneElement.parse(json, providedInstance);
  
    if (json.message !== undefined) {
      newInstance.message = PrimitiveCanonical.parsePrimitive(json.message, json._message);
    }
    if (json.situation !== undefined) {
      newInstance.situation = PrimitiveMarkdown.parsePrimitive(json.situation, json._situation);
    }
    return newInstance;
  }

  public static isMessageDefinitionAllowedResponse(input?: unknown): input is MessageDefinitionAllowedResponse {
    const castInput = input as MessageDefinitionAllowedResponse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MessageDefinitionAllowedResponse";
  }

  public toJSON(): IMessageDefinitionAllowedResponse {
    const result: IMessageDefinitionAllowedResponse = super.toJSON();

    if (this.message) {
      result.message = this.message.value;
      result._message = Extension.serializePrimitiveExtension(this.message);
    }

    if (this.situation) {
      result.situation = this.situation.value;
      result._situation = Extension.serializePrimitiveExtension(this.situation);
    }

    return result;
  }

  public clone(): MessageDefinitionAllowedResponse {
    return MessageDefinitionAllowedResponse.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MessageDefinitionAllowedResponse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
