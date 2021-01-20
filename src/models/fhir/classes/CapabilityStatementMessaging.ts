/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CapabilityStatementMessagingEndpoint,
  CapabilityStatementMessagingSupportedMessage,
  Extension,
  FhirField,
  FhirList,
  ICapabilityStatementMessaging,
  PrimitiveMarkdown,
  PrimitiveUnsignedInt,
  FhirType
} from "../internal";

@FhirType("CapabilityStatementMessaging", "BackboneElement")
export class CapabilityStatementMessaging extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatement.Messaging";

  static readonly primaryCodePath: string | null = null;

  @FhirList("CapabilityStatementMessagingEndpoint")
  public endpoint?: Array<CapabilityStatementMessagingEndpoint>;

  @FhirField("PrimitiveUnsignedInt")
  public reliableCache?: PrimitiveUnsignedInt;

  @FhirField("PrimitiveMarkdown")
  public documentation?: PrimitiveMarkdown;

  @FhirList("CapabilityStatementMessagingSupportedMessage")
  public supportedMessage?: Array<CapabilityStatementMessagingSupportedMessage>;

  public static parse(
    json: ICapabilityStatementMessaging,
    providedInstance: CapabilityStatementMessaging = new CapabilityStatementMessaging()
  ): CapabilityStatementMessaging {
    const newInstance: CapabilityStatementMessaging = BackboneElement.parse(json, providedInstance);
  
    if (json.endpoint !== undefined) {
      newInstance.endpoint = json.endpoint.map((x) => CapabilityStatementMessagingEndpoint.parse(x));
    }
    if (json.reliableCache !== undefined) {
      newInstance.reliableCache = PrimitiveUnsignedInt.parsePrimitive(json.reliableCache, json._reliableCache);
    }
    if (json.documentation !== undefined) {
      newInstance.documentation = PrimitiveMarkdown.parsePrimitive(json.documentation, json._documentation);
    }
    if (json.supportedMessage !== undefined) {
      newInstance.supportedMessage = json.supportedMessage.map((x) => CapabilityStatementMessagingSupportedMessage.parse(x));
    }
    return newInstance;
  }

  public static isCapabilityStatementMessaging(input?: unknown): input is CapabilityStatementMessaging {
    const castInput = input as CapabilityStatementMessaging;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CapabilityStatementMessaging";
  }

  public toJSON(): ICapabilityStatementMessaging {
    const result: ICapabilityStatementMessaging = super.toJSON();

    if (this.endpoint) {
      result.endpoint = this.endpoint.map((x) => x.toJSON());
    }

    if (this.reliableCache) {
      result.reliableCache = this.reliableCache.value;
      result._reliableCache = Extension.serializePrimitiveExtension(this.reliableCache);
    }

    if (this.documentation) {
      result.documentation = this.documentation.value;
      result._documentation = Extension.serializePrimitiveExtension(this.documentation);
    }

    if (this.supportedMessage) {
      result.supportedMessage = this.supportedMessage.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): CapabilityStatementMessaging {
    return CapabilityStatementMessaging.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CapabilityStatementMessaging";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
