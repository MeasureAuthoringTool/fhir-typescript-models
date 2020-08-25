/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Attachment,
  BackboneElement,
  Extension,
  ICommunicationPayload,
  PrimitiveString,
  Reference,
} from "../internal";

export class CommunicationPayload extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Communication.Payload";

  public content?: PrimitiveString | Attachment | Reference;

  public static parse(
    json: ICommunicationPayload,
    providedInstance: CommunicationPayload = new CommunicationPayload()
  ): CommunicationPayload {
    const newInstance: CommunicationPayload = BackboneElement.parse(json, providedInstance);
  
    if (json.contentString) {
      newInstance.content = PrimitiveString.parsePrimitive(json.contentString, json._contentString);
    }
    if (json.contentAttachment) {
      newInstance.content = Attachment.parse(json.contentAttachment);
    }
    if (json.contentReference) {
      newInstance.content = Reference.parse(json.contentReference);
    }
    return newInstance;
  }

  public static isCommunicationPayload(input?: unknown): input is CommunicationPayload {
    const castInput = input as CommunicationPayload;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CommunicationPayload";
  }

  public toJSON(): ICommunicationPayload {
    const result: ICommunicationPayload = super.toJSON();

    if (this.content && PrimitiveString.isPrimitiveString(this.content)) {
      result.contentString = this.content.value;
      result._contentString = Extension.serializePrimitiveExtension(this.content);
    }

    if (this.content && Attachment.isAttachment(this.content)) {
      result.contentAttachment = this.content.toJSON();
    }

    if (this.content && Reference.isReference(this.content)) {
      result.contentReference = this.content.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "CommunicationPayload";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
