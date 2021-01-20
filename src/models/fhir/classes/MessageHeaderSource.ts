/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  ContactPoint,
  Extension,
  FhirField,
  IMessageHeaderSource,
  PrimitiveString,
  PrimitiveUrl,
  FhirType
} from "../internal";

@FhirType("MessageHeaderSource", "BackboneElement")
export class MessageHeaderSource extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MessageHeader.Source";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveString")
  public software?: PrimitiveString;

  @FhirField("PrimitiveString")
  public version?: PrimitiveString;

  @FhirField("ContactPoint")
  public contact?: ContactPoint;

  @FhirField("PrimitiveUrl")
  public endpoint?: PrimitiveUrl;

  public static parse(
    json: IMessageHeaderSource,
    providedInstance: MessageHeaderSource = new MessageHeaderSource()
  ): MessageHeaderSource {
    const newInstance: MessageHeaderSource = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.software !== undefined) {
      newInstance.software = PrimitiveString.parsePrimitive(json.software, json._software);
    }
    if (json.version !== undefined) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    if (json.contact !== undefined) {
      newInstance.contact = ContactPoint.parse(json.contact);
    }
    if (json.endpoint !== undefined) {
      newInstance.endpoint = PrimitiveUrl.parsePrimitive(json.endpoint, json._endpoint);
    }
    return newInstance;
  }

  public static isMessageHeaderSource(input?: unknown): input is MessageHeaderSource {
    const castInput = input as MessageHeaderSource;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MessageHeaderSource";
  }

  public toJSON(): IMessageHeaderSource {
    const result: IMessageHeaderSource = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.software) {
      result.software = this.software.value;
      result._software = Extension.serializePrimitiveExtension(this.software);
    }

    if (this.version) {
      result.version = this.version.value;
      result._version = Extension.serializePrimitiveExtension(this.version);
    }

    if (this.contact) {
      result.contact = this.contact.toJSON();
    }

    if (this.endpoint) {
      result.endpoint = this.endpoint.value;
      result._endpoint = Extension.serializePrimitiveExtension(this.endpoint);
    }

    return result;
  }

  public clone(): MessageHeaderSource {
    return MessageHeaderSource.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MessageHeaderSource";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
