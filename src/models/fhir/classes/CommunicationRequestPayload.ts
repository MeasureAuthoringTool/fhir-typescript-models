/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Attachment,
  BackboneElement,
  Extension,
  FhirChoice,
  ICommunicationRequestPayload,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("CommunicationRequestPayload", "BackboneElement")
export class CommunicationRequestPayload extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CommunicationRequest.Payload";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("PrimitiveString", "Attachment", "Reference")
  public content?: PrimitiveString | Attachment | Reference;

  public static parse(
    json: ICommunicationRequestPayload,
    providedInstance: CommunicationRequestPayload = new CommunicationRequestPayload()
  ): CommunicationRequestPayload {
    const newInstance: CommunicationRequestPayload = BackboneElement.parse(json, providedInstance);
  
    if (json.contentString !== undefined) {
      newInstance.content = PrimitiveString.parsePrimitive(json.contentString, json._contentString);
    }
    if (json.contentAttachment !== undefined) {
      newInstance.content = Attachment.parse(json.contentAttachment);
    }
    if (json.contentReference !== undefined) {
      newInstance.content = Reference.parse(json.contentReference);
    }
    return newInstance;
  }

  public static isCommunicationRequestPayload(input?: unknown): input is CommunicationRequestPayload {
    const castInput = input as CommunicationRequestPayload;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CommunicationRequestPayload";
  }

  public toJSON(): ICommunicationRequestPayload {
    const result: ICommunicationRequestPayload = super.toJSON();

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

  public clone(): CommunicationRequestPayload {
    return CommunicationRequestPayload.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CommunicationRequestPayload";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
