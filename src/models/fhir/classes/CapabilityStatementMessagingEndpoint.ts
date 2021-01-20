/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Coding,
  Extension,
  FhirField,
  ICapabilityStatementMessagingEndpoint,
  PrimitiveUrl,
  FhirType
} from "../internal";

@FhirType("CapabilityStatementMessagingEndpoint", "BackboneElement")
export class CapabilityStatementMessagingEndpoint extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatement.Messaging.Endpoint";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Coding")
  public protocol?: Coding;

  @FhirField("PrimitiveUrl")
  public address?: PrimitiveUrl;

  public static parse(
    json: ICapabilityStatementMessagingEndpoint,
    providedInstance: CapabilityStatementMessagingEndpoint = new CapabilityStatementMessagingEndpoint()
  ): CapabilityStatementMessagingEndpoint {
    const newInstance: CapabilityStatementMessagingEndpoint = BackboneElement.parse(json, providedInstance);
  
    if (json.protocol !== undefined) {
      newInstance.protocol = Coding.parse(json.protocol);
    }
    if (json.address !== undefined) {
      newInstance.address = PrimitiveUrl.parsePrimitive(json.address, json._address);
    }
    return newInstance;
  }

  public static isCapabilityStatementMessagingEndpoint(input?: unknown): input is CapabilityStatementMessagingEndpoint {
    const castInput = input as CapabilityStatementMessagingEndpoint;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CapabilityStatementMessagingEndpoint";
  }

  public toJSON(): ICapabilityStatementMessagingEndpoint {
    const result: ICapabilityStatementMessagingEndpoint = super.toJSON();

    if (this.protocol) {
      result.protocol = this.protocol.toJSON();
    }

    if (this.address) {
      result.address = this.address.value;
      result._address = Extension.serializePrimitiveExtension(this.address);
    }

    return result;
  }

  public clone(): CapabilityStatementMessagingEndpoint {
    return CapabilityStatementMessagingEndpoint.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CapabilityStatementMessagingEndpoint";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
