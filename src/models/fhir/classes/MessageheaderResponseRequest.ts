/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("MessageheaderResponseRequest", "PrimitiveCode")
export class MessageheaderResponseRequest extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Messageheader_Response_Request";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: MessageheaderResponseRequest = new MessageheaderResponseRequest()
  ): MessageheaderResponseRequest {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isMessageheaderResponseRequest(input?: unknown): input is MessageheaderResponseRequest {
    const castInput = input as MessageheaderResponseRequest;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MessageheaderResponseRequest";
  }

  public clone(): MessageheaderResponseRequest {
    const result = new MessageheaderResponseRequest();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "MessageheaderResponseRequest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
